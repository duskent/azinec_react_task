import React, {Component} from 'react';

class EventForm extends Component {
  render() {
    return(
      <form name="reviewForm" className="form-horizontal">
        <div className="input-container">
           <fieldset className="form-group">
             <label htmlFor="title" className="col-sm-2 control-label">Title:</label>
             <span className="col-sm-9">
               <input type="text" className="form-control" id="title"
               placeholder="Book Title" value={this.props.newEvent.title}/>
             </span>
           </fieldset>

         <fieldset className="form-group">
           <label className="control-label col-sm-2" htmlFor="review">Review</label>
           <span className="col-sm-9">
             <textarea id="review" className="form-control" cols="30" rows="3"
             placeholder="Book Review"></textarea>
           </span>
         </fieldset>

         <fieldset className="form-group">
           <label htmlFor="rating" className="control-label col-sm-2">Rating:</label>
           <span className="col-sm-9">
             <select className="form-control" id="rating" defaultValue="Open">
               <option>Open</option>
               <option>Sold out</option>
               <option>Closed</option>
               <option>Draft</option>
             </select>
           </span>
         </fieldset>

         <fieldset className="form-group">
           <span className="col-sm-9 col-sm-offset-2 button-from-hell">
             <button className="btn btn-primary">Save Review</button>
           </span>
         </fieldset>
        </div>
      </form>
    );
  }
}

export default EventForm;
