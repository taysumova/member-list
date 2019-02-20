import React, {Component} from 'react';

const CityList = (props) => {
    const rows = props.cities.map((city, index) => {
        return (
            <option key={index} value={city}>{city}</option>
        );
    });
    return <select name="eventCity" onChange={props.handleChange}>{rows}</select>;
}

class EditForm extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            memberName: this.props.editInfo[0].memberName,
            memberEmail: this.props.editInfo[0].memberEmail,
            memberPhone: this.props.editInfo[0].memberPhone,
            memberPhoto: this.props.editInfo[0].memberPhoto,
            eventCity: this.props.editInfo[0].eventCity
        };

        this.validation = {
            name: true,
            email: true,
            phone: true
        };
        this.state = this.initialState;
    }

    componentDidMount() {
        this.refs.memberName.focus();
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });

        let nameRegExp = /^[a-zа-яё\s]+$/i,
            emailRegExp = /^\w{2,}[.-]?\w{2,}@mail.ru$/,
            phoneRegExp = /^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/i;

        if(name === "memberName") {
            this.validation.name = !nameRegExp.test(value) ? false : true;
        } else if (name === "memberEmail") {
            this.validation.email = !emailRegExp.test(value) ? false : true;
        } else if (name === "memberPhone") {
            this.validation.phone = !phoneRegExp.test(value) ? false : true;
        }
    };

    onFormSave = e => {
        e.preventDefault();
        if(this.validation.name && this.validation.phone && this.validation.email) {
            alert("Информация отредактирована");
            this.props.handleEdit(this.state);
            this.setState(this.initialState);
        } else {
            alert("Заполните корректно поля");
        }
    };

    handleValidation = e => {
        const {name} = e.target;
        let nameRegExp = /^[a-zа-яё\s]{2,}$/i,
            emailRegExp = /^\w{2,}[.-]?\w{2,}@mail.ru$/,
            phoneRegExp = /^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/i;

        if(name === "memberName") {
            this.validation.name = !nameRegExp.test(this.state.memberName) ? false : true;
        } else if (name === "memberEmail") {
            this.validation.email = !emailRegExp.test(this.state.memberEmail) ? false : true;
        } else if (name === "memberPhone") {
            this.validation.phone = !phoneRegExp.test(this.state.memberPhone) ? false : true;
        }
    };

    handleFile = e => {
        const {name} = e.target;
        let fReader = new FileReader();
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = event => {
            this.setState({
                [name]: event.target.result
            });
        }
    }

    render() {
        const {memberName, memberEmail, memberPhone} = this.state;
        const {name, email, phone} = this.validation;

        return (
            <form className="editForm" onSubmit={this.onFormSave}>
                <button onClick={this.props.closeForm}>X</button>
                <fieldset>
                    <legend>Редактировать</legend>
                    <label>ФИО</label>
                    <span className="error">
                        {name ? "" : "Имя должно содержать только буквы"}
                    </span>
                    <input
                        type="text"
                        ref="memberName"
                        name="memberName"
                        placeholder="Иванов Иван Иванович"
                        value={memberName}
                        onBlur={this.handleValidation}
                        onChange={this.handleChange}
                        required/>
                    <label>Email</label>
                    <span className="error">
                        {email ? "" : "Некорректный формат e-mail"}
                    </span>
                    <input
                        type="text"
                        name="memberEmail"
                        placeholder="mymail@mail.ru"
                        value={memberEmail}
                        onBlur={this.handleValidation}
                        onChange={this.handleChange}
                        required/>
                    <label>Телефон</label>
                    <span className="error">
                        {phone ? "" : "Некорректный формат номера"}
                    </span>
                    <input
                        type="text"
                        name="memberPhone"
                        placeholder="+7(000)000-0000"
                        value={memberPhone}
                        onClick={this.handleValidation}
                        onChange={this.handleChange}
                        required/>
                    <label>Город для участия</label>
                    <CityList cities={this.props.cities}
                              handleChange={this.handleChange}/>
                    <input type="file"
                           onChange={this.handleFile}
                           name="memberPhoto"/>
                    <button type="submit" className="submit-btn">
                        Сохранить
                    </button>
                </fieldset>
            </form>
        );
    }
}

export default EditForm;