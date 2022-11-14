import {PureComponent} from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.friendsList = [
      "Kobe", "James", "Curry", "Justin"
    ]

    this.hobbyList = [
      'basketball',
      'football',
      'shuttlecock'
    ]

    this.state = {
      form: {
        name: '',
        password: '',
        sex: 'man',
        friends: [],
        hobby: this.hobbyList[0],
        hobbies: []
      }
    }
  }

  render() {
    const {
      name,
      password,
      sex,
      friends,
      hobby,
      hobbies
    } = this.state.form

    return (
      <form onSubmit={e => this.submit(e)}>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" id="name" name="name" value={name} onChange={e => this.handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" value={password} onChange={e => this.handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="man">man</label>
          <input type="radio" name="sex" id="man" value="man" checked={sex === 'man'}
                 onChange={e => this.handleChange(e)}/>
          <label htmlFor="woman">woman</label>
          <input type="radio" name="sex" id="woman" value="woman" checked={sex === 'woman'}
                 onChange={e => this.handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="friends">friends</label>
          {
            this.friendsList.map((item, index) => (
              <div key={item}>
                <input type="checkbox" name="friends" id={item} value={item} onChange={e => this.handleChange(e)}/>
                <label htmlFor={item}>{item}</label>
              </div>
            ))
          }
        </div>
        <div>
          <select name="hobby" id="hobby" value={hobby} onChange={e => this.handleChange(e)}>
            {
              this.hobbyList.map((item, index) => (
                <option value={item} key={item}>{item}</option>
              ))
            }
          </select>
        </div>
        <div>
          <select name="hobbies" id="hobbies" multiple={true} value={hobbies} onChange={e => this.handleChange(e)}>
            {
              this.hobbyList.map((item, index) => (
                <option value={item} key={item}>{item}</option>
              ))
            }
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    )
  }

  submit(e) {
    e.preventDefault()
    console.log(this.state.form)
  }

  handleChange(e) {
    const target = e.target
    const form = {...this.state.form}
    console.log(target.type)
    if (target.type === 'checkbox') {
      const values = [...form[target.name]]
      if (target.checked) {
        form[target.name] = [...values, target.value]
      } else {
        form[target.name].splice(form[target.name].indexOf(target.value), 1)
      }
    } else if (target.type === 'select-multiple') {
      const values = Array.from(target.selectedOptions, option => option.value)
      form[target.name] = values
    } else {
      form[target.name] = target.value
    }

    this.setState({
      form
    })
  }
}