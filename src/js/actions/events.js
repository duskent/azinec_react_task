import axios from 'axios';

// Events List
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
//Delete post
export const DELETE_EVENT = 'DELETE_EVENT';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'DELETE_POST_FAILURE';

//-------------------------------------- Actions -----------------------------------------
// Fetch Events
export function fetchEvents() {
  const request = axios({
    method: 'get',
    url: '/events',
    headers: []
  });

  return {
    type: FETCH_EVENTS,
    payload: request
  };
}

export function fetchEventsSuccess(events) {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: events
  };
}

export function fetchEventsFailure(error) {
  return {
    type: FETCH_EVENTS_FAILURE,
    payload: error
  };
}

// Delete Events
export function deleteEvent(id) {
  const request = axios({
    method: 'delete',
    url: `/events/${id}`,
    headers: {}
  });
  return {
    type: DELETE_EVENT,
    payload: request
  };
}

export function deleteEventSuccess(deletedEvent) {
  return {
    type: DELETE_EVENT_SUCCESS,
    payload: deletedEvent,
  };
}

export function deleteEventFailure(response) {
  return {
    type: DELETE_EVENT_FAILURE,
    payload: response
  };
}
