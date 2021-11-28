import React from 'react';
import { Route,  } from 'react-router';
import Home from './Pages';
import { Switch } from 'react-router-dom';
export default function Routes() {
   
  return (
    <Switch>
    <Route path="/" component={Home} />
    <Route path="/home" component={Home} />
  </Switch>
  );
}

// export const Path = {
//   survey(survey) {
//     return `/user/surveys/${survey.id}/`;
//   },

//   editSurvey(survey) {
//     return `/user/surveys/${survey.id}/edit`;
//   },

//   surveyList() {
//     return `/user/surveys`;
//   },

//   viewSurvey(survey) {
//     return `/surveys/${survey.id}`;
//   },

//   login() {
//     return `/login`;
//   },

//   logout() {
//     return `/logout`;
//   }
// };
