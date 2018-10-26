import React from 'react';

class SummaryRatings extends React.Component {

  constructor(props){
    super(props);
  }

  sumRatings(arr, prop){
    return arr.reduce((sum, obj)=> sum+=obj.ratings[prop], 0);
  }

  avgRating(arr, prop){
    return (this.sumRatings(arr, prop)/arr.length).toFixed(2);
  }

  render(){
    return (
      <div className = "reviews-summary">
        <table>
        <tbody>
          <tr>
            <td> Accuracy {this.avgRating(this.props.reviewsStore, 'Accuracy')} </td>
            <td> Location {this.avgRating(this.props.reviewsStore, 'Location')} </td>
          </tr>
          <tr>
            <td> Communication {this.avgRating(this.props.reviewsStore, 'Communication')} </td>
            <td> Check-in {this.avgRating(this.props.reviewsStore, 'Checkin')} </td>
          </tr>
          <tr>
            <td> Cleanliness {this.avgRating(this.props.reviewsStore, 'Cleanliness')} </td>
            <td> Value {this.avgRating(this.props.reviewsStore, 'Value')} </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }

}

export default SummaryRatings;