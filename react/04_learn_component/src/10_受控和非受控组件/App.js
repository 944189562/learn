import {PureComponent, createRef} from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.checkList = [
      "Apple", "Banana", "Tea", "Coffee"
    ]

    this.state = {
      username: '',
      password: '',
      sex: 'man',
      friends: [],
      fruit: 'lime',
      fruits: ['lime', 'coconut'],
      description: ''
    }

    this.myRef = createRef()
  }

  render() {
    return (
      <div>
        <h2>受控组件</h2>
        <form onSubmit={(e) => this.submit(e)}>
          <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" value={this.state.username}
                   onChange={e => this.handleChange(e)}/>
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" value={this.state.password}
                   onChange={e => this.handleChange(e)}/>
          </div>
          <div>
            <label>sex</label>
            <input type="radio" name="sex" id="man" value="man" checked={this.state.sex === 'man'}
                   onChange={e => this.handleChange(e)}/><label htmlFor="man">man</label>
            <input type="radio" name="sex" id="woman" value="woman" checked={this.state.sex === 'woman'}
                   onChange={e => this.handleChange(e)}/><label htmlFor="woman">woman</label>
          </div>
          <div>
            <label>friends</label>
            {
              this.checkList.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" id={index} name="friends" value={item} onChange={(e) => this.handleCheck(e)}/>
                  <label htmlFor={index}>{item}</label>
                </div>
              ))
            }
          </div>
          <div>
            <label htmlFor="fruit">fruit</label>
            <select name="fruit" id="fruit" value={this.state.fruit} onChange={e => this.handleChange(e)}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">酸橙</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </div>
          <div>
            <label htmlFor="fruits">fruits</label>
            <select name="fruits" id="fruits" multiple={true} value={this.state.fruits} onChange={e => this.handleChange(e)}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">酸橙</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </div>
          <div>
            <label htmlFor="description">profile</label>
            <textarea name="description" id="description" value={this.state.description}
                      onChange={e => this.handleChange(e)}></textarea>
          </div>
          <input type="submit" value="提交"/>
        </form>
        <h2>非受控组件</h2>
        <div>
          <input type="text" ref={this.myRef}/>
          <button onClick={() => this.handleRef()}>ref</button>
        </div>
      </div>
    )
  }

  submit(event) {
    event.preventDefault()
    console.log('表单提交', this.state)
  }

  handleChange(event) {
    console.log(event)
    const target = event.target
    if(target.type === 'select-multiple') {
      let value = Array.from(target.selectedOptions, (option) => option.value)
      this.setState({
        [target.name]: value
      })
    } else {
      this.setState({
        [target.name]: target.value
      })
    }
  }

  handleCheck(e) {
    let updateList = [...this.state.friends]
    if (e.target.checked) {
      updateList = [...this.state.friends, e.target.value]
    } else {
      updateList.splice(this.state.friends.indexOf(e.target.value), 1)
    }

    this.setState({
      friends: updateList
    })
  }

  handleRef() {
    console.log(this.myRef)
    this.myRef.current.focus();
  }
}