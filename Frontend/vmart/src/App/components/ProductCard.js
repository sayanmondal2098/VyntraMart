import React, { Component } from 'react'

export default class ProductCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             image:this.props.image,
             name:this.props.name,
             sellPrice:Math.round(this.props.discount*this.props.price),
             price:this.props.price,
             offer:Math.round((1-this.props.discount)*100),
        }
    }
    
    render() {
        return (
            <div className="ProductCard">
                <img className="card" src={this.state.image} alt={this.state.name}/>
                <br/>
                <label className="boldtextH1">{this.state.name}</label>                
                <br/>
                <label className="boldtextH2">₹ {this.state.sellPrice}</label>       
                <label className="textH2">₹ {this.state.price}</label>      
                <label className="textoffer">({this.state.offer}% OFF)</label> 
                <br/>
            </div>
        )
    }
}
