import React, {Component} from 'react';

class BabyDetails extends Component {
    constructor(props) {
        super(props)
            
    }

   
    render() {
        let developmentArray = []
        let babyDetails = this.props.pregnancydetails.map(item => {
            developmentArray = item.babydevelopment;
            return (
                <div>
                    <p>{"Your baby is the size of a " + item.item}</p>
                    <p>{item.size}</p>
                    <img src={item.babyimage} height='300px' width='300px'/>
                </div>
            )
        })

        let developmentDetails = developmentArray.map(item => {
            return (
                <div>
                    <p>{item.description}</p>
                    <img src={item.developmentimage} height='300px' width='450px'/>
                </div>
            )
        })

        return (
            <div>
                {babyDetails}
                <img src='https://pregnancyapplication.s3-us-west-1.amazonaws.com/BabyDevelopment.jpg' height='300px' width='300px'/>
                {developmentDetails}
            </div>
        )
    }
}

export default BabyDetails;
