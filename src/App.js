import React, {Component} from 'react';
import Form from './Form.js';
import Table from './Table.js';
import EditForm from "./EditForm";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membersData: [],
            editMode: false,
            editInfo: [],
            cities: ["", "Москва", "Санкт-Петербург", "Екатеринбург", "Нижний Новгород", "Новосибирск", "Казань", "Челябинск", "Омск", "Самара", "Ростов-на-Дону"]
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

    closeForm =() => {
        this.setState({
            editMode: false,
            editInfo: []
        });
    };

    handleEdit = memberData => {
        const memberIndex = this.state.editInfo[1];
        this.state.membersData.splice([memberIndex], 1, memberData);

        this.setState({
            editMode: false,
            editInfo: []
        });
    }

    editMemberInfo = index => {
        const {membersData} = this.state;
        const member = membersData[index];

        this.setState({
            editMode: true,
            editInfo: [member, index]});
    };

    removeMember = index => {
        const {membersData} = this.state;

        this.setState({
            membersData: membersData.filter((memberData, i) => {
                return i !== index;
            })
        });
    };

    render() {
        const {membersData, editInfo, cities} = this.state;
        return (
            <div className="container">
                <Form handleSubmit={this.handleSubmit}
                      membersData={membersData}
                      cities={cities}
                />
                <Table editMemberInfo={this.editMemberInfo}
                       removeMember={this.removeMember}
                       membersData={membersData}/>
                {this.state.editMode ?
                    <EditForm handleEdit={this.handleEdit}
                              membersData={membersData}
                              editInfo={editInfo}
                              closeForm={this.closeForm}
                              cities={cities}/>: ""}
            </div>
        );
    }
}

export default App;