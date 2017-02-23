import axios from 'axios';

// Events List
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
// Fetch Event
export const FETCH_EVENT = 'FETCH_EVENT';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE';
//Delete post
export const DELETE_EVENT = 'DELETE_EVENT';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'DELETE_POST_FAILURE';

//-------------------------------------- Actions -----------------------------------------
// Fetch Events
export function fetchEvents() {
  const request = axios({
    method: 'get',
    url: 'api/events',
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
    url: `api/events/${id}`,
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

// Fetch EVENT
export function fetchEvent(id) {
  const request = axios({
    method: 'get',
    url: `/api/events/${id}`,
    headers: {}
  });
  return {
    type: FETCH_EVENT,
    payload: request
  };
}

export function fetchEventSuccess(activeEvent) {
  return {
    type: FETCH_EVENT_SUCCESS,
    payload: activeEvent
  };
}

export function fetchEventFailure(error) {
  return {
    type: FETCH_EVENT_FAILURE,
    payload: error
  };
}
