import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class EventForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <form name="reviewForm" onSubmit={handleSubmit} className="form-horizontal">
        <div className="input-container">
           <fieldset className="form-group">
             <label htmlFor="title" className="col-sm-2 control-label">Title:</label>
             <span className="col-sm-9">
               <Field name="title" component="input" type="text" placeholder="Title"/>
             </span>
           </fieldset>

           <fieldset className="form-group">
             <label htmlFor="image" className="col-sm-2 control-label">Image(url):</label>
             <span className="col-sm-9">
               <Field name="image" component="input" type="text" placeholder="Image"/>
             </span>
           </fieldset>

         <fieldset className="form-group">
           <label className="control-label col-sm-2" htmlFor="description">Description</label>
           <span className="col-sm-9">
             <Field name="description" className="form-control" cols="30" rows="3"
             placeholder="Event description" component="textarea"/>
           </span>
         </fieldset>

         <fieldset className="form-group">
           <label htmlFor="startTime" className="col-sm-2 control-label">Start Time:</label>
           <span className="col-sm-9">
             <Field name="startTime" component="input" type="text" placeholder="Start time"/>
           </span>
         </fieldset>

         <fieldset className="form-group">
           <label htmlFor="endTime" className="col-sm-2 control-label">End Time:</label>
           <span className="col-sm-9">
             <Field name="endTime" component="input" type="text" placeholder="End Time"/>
           </span>
         </fieldset>

         <fieldset className="form-group">
           <label htmlFor="registrationLimit" className="col-sm-2 control-label">Registration Limit:</label>
           <span className="col-sm-9">
             <Field name="registrationLimit" component="input" type="text" placeholder="Registration Limit"/>
           </span>
         </fieldset>

         <fieldset className="form-group">
           <label htmlFor="remainingSeats" className="col-sm-2 control-label">Remaining seats:</label>
           <span className="col-sm-9">
             <Field name="remainingSeats" component="input" type="text" placeholder="Remaining seats"/>
           </span>
         </fieldset>

         <fieldset className="form-group">
           <label htmlFor="status" className="control-label col-sm-2">Status:</label>
           <span className="col-sm-9">
             <Field className="form-control" name="status" component="select">
               <option value="Open">Open</option>
               <option value="Sold">Sold out</option>
               <option value="Closed">Closed</option>
               <option value="Draft">Draft</option>
             </Field>
           </span>
         </fieldset>

         <fieldset className="form-group">
           <span className="col-sm-9 col-sm-offset-2 button-from-hell">
             <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Save Review</button>
             <button type="button" disabled={pristine || submitting} className="btn btn-default" onClick={reset}>Clear Values</button>
           </span>
         </fieldset>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'eventForm'
})(EventForm)
