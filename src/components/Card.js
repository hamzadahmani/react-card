import React,{Component} from 'react'
let card ="credit card"


const renderCardNumber = (cardNumber) => {
    cardNumber += '*****************************'
    var str ='';
    for (let i=0;i<16;i+= 4){
        str += cardNumber.slice(i,i+4) +' '
    }
    return str.trim()
}

const date = validThru => {
     
     
    if(validThru.length <= 2 && (validThru.charAt(0) !== 1 && validThru.charAt(1) !== 2))
    return (validThru.charAt(1) === 1 && validThru.charAt(1)  === 2)
return validThru.slice(0, 2) + '/' + validThru.slice(2)
   
}
const normalizeInput = input => input.replace(/[^\d]/g, '').slice(0,16)
const normalizeNAme = input => input.replace(/[^a-z]/g,'').slice(0,16)
const normalizedate = input => input.replace(/[^\d]/g, '').slice(0,4)
class CreditCard extends Component {
    constructor(props) {
        super(props)
            this.state = {
                cardNumber:'',
                name:'',
                date:'',
            }
            this.onChange = this.onChange.bind(this)
            this.handleChange=this.handleChange.bind(this)
            this.upperName=this.upperName.bind(this)
            this.dateNumber=this.dateNumber.bind(this)
        }   
    dateNumber(evt){
        this.setState({
            date:normalizedate(evt.target.value)
        })
    }
    upperName(evt){
        this.setState({
            name:normalizeNAme(evt.target.value),
        })
    }
    handleChange(evt) {
        this.setState({
            cardNumber:normalizeInput(evt.target.value)
        });
      }    
    onChange (event) {
        this.setState({
          value: event.target.value
        })}
    render(){
        return <div>
        <div className="credit-card">
            <h1 className="title-card">{card.toUpperCase()}</h1>
            <div className="card-sim"></div>
            <div className="group-infos">
                <div className="line-space">
            <h1 className="number-card styleNumber" >{renderCardNumber(this.state.cardNumber)}</h1>
                    <div className="group-infos">
                        <h2 className="styleNumber">5422</h2>
                        <div className="footer-block">   
                            <div>
                                <h3 className="text">VALID</h3>
                                <h3 className="text">THRU</h3>
                            </div>
                            <p className="fleche"></p>
                            <div className="text">
                                <p className="month-year">MONTH/YEAR</p>
                                <h2 className="date">{date(this.state.date)}</h2>
                            </div>
                        </div>
                    </div>
                    <h2 className="footer-card" >{this.state.name.toUpperCase()}</h2>
                </div>
                <div className="card-visa"></div>
            </div>
        </div>
    <div >
    <label>Nom :</label> <input type="text" name="name" onChange={this.upperName}  />
        <label>Number :</label> <input type="text" name="serial"  value={this.state.cardNumber} onInput={this.handleChange} onChange={this.onChange} />
        <label>Date :</label>   <input type="text" name="date" onChange={this.dateNumber}  />
    </div>
    </div>
}
}
export default CreditCard