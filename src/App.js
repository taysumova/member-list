import React, {Component} from 'react';
import Form from './Form.js';
import Table from './Table.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membersData: [],
            cities: ["Москва", "Санкт-Петербург", "Екатеринбург", "Нижний Новгород", "Новосибирск", "Казань", "Челябинск", "Омск", "Самара", "Ростов-на-Дону"]
        }
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();

        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );

        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
            // if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                // get the key's value from localStorage
                let value = localStorage.getItem(key);

                // parse the localStorage string and setState
                try {
                    value = JSON.parse(value);
                    this.setState({[key]: value});
                } catch (e) {
                    // handle empty string
                    this.setState({[key]: value});
                }
            }
        }
    };

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    handleSubmit = memberData => {
        this.setState({membersData: [...this.state.membersData, memberData]});
    }

    editAd = index => {
        const {membersData} = this.state;
        const formTitle = document.getElementsByTagName('input')[0];
        const formCity = document.getElementsByTagName('input')[1];
        const formNumber = document.getElementsByTagName('input')[2];
        formTitle.value = membersData[index].memberName;
        formCity.value = membersData[index].memberCity;
        formNumber.value = membersData[index].memberPhone;
        console.log(membersData[index]);
        formTitle.focus();
    }

    removeMember = index => {
        const {membersData} = this.state;

        this.setState({
            membersData: membersData.filter((memberData, i) => {
                return i !== index;
            })
        });

        console.log(this.cities);
    }

    render() {
        const {membersData, cities} = this.state;
        return (
            <div className="container">
                <Form handleSubmit={this.handleSubmit}
                      membersData={membersData}
                      cities={cities}
                />
                <Table editMemberInfo={this.editMemberInfo}
                       removeMember={this.removeMember}
                       membersData={membersData}/>
            </div>
        );
    }
}

export default App;