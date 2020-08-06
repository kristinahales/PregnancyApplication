import React, {Component} from 'react';
import Modal from 'react-modal';
import '../BabyDetails/BabyDetails.css'
class BabyDetails extends Component {
    constructor(props) {
        super(props)
            this.state = {
                showModal: false
            }
            this.handleOpenModal = this.handleOpenModal.bind(this);
            this.handleCloseModal = this.handleCloseModal.bind(this);
            this.caculateWeeksRemaining = this.calculateWeeksRemaining.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleCloseModal () {
        this.setState({ showModal: false });
    }
    
    calculateWeeksRemaining(numofweeks) {
        return 40 - parseInt(numofweeks);
    }

    render() {
        let developmentArray = []
        let size = '';
        let babyDetails = this.props.pregnancydetails.map(item => {
            developmentArray = item.babydevelopment;
            size = item.size;
            return (
                <div key={item.numofweeks} className='babyDetailsContainer'>
                    <p className='smallcircle'><button className='developmentButton' onClick={this.handleOpenModal}></button></p>
                    <img className='babyitem' src={item.babyimage} alt={item.item} height='120px' width='120px'/>
                    <p id='numofweeks' className='smallcircle'>{this.calculateWeeksRemaining(item.numofweeks)}</p>
                </div>
            )
        })

        let developmentDetails = developmentArray.map(item => {
            return (
                <div key={item.babydevelopmentid}>
                    <p>{item.description}</p>
                    <img src={item.developmentimage} alt='Developing fetus' height='125px' width='200px'/>
                </div>
            )
        })      
        return (
            <div>
                {babyDetails}
                <Modal 
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example" 
                appElement={document.getElementById('root')}
                >
                {developmentDetails}
                <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
                <div className='detailsContainer'>
                    <p className='sizeItems'>{size}</p>
                    <p className='sizeItems'>Weeks to Go!</p>
                </div>
            </div>
        )
    }
}

export default BabyDetails;
