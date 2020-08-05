import React, {Component} from 'react';

class Symptoms extends Component {
    constructor(props) {
        super(props)
            
    }

   
    render() {
        let symptomArray = [];    
        this.props.pregnancydetails.map(item => {
            symptomArray = item.symptoms;
        })

        let symptoms = symptomArray.map(symptom => {
            return (
                <div>
                    <p>{symptom.symptom}</p>
                    <p>{symptom.description}</p>
                    <img src={symptom.symptomimage} height='300px' width='300px'/>
                </div>
            )
        }) 
        return (
            <div>
                {symptoms}
            </div>
        )
    }
}

export default Symptoms;
