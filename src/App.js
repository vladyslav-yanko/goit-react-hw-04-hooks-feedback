import React, { useState, useEffect } from 'react';
import FeedBackOptions from 'Components/FeedbackOptions/FeedbackOptions';
import Statistics from 'Components/Statistics/Statistics';
import Notification from 'Components/Notification/Notification';

import './App.css';

export default function App () {
  const [good, setGood] = useState(0);
  
  const [neutral, setNeutral] = useState(0);
  
  const [bad, setBad] = useState(0);

 

  const addFeedback = e => {
    // console.log('e :>> ', e);
    switch (e) {
      case 'good': setGood(prev => prev + 1);
        break;
      case 'neutral': setNeutral(prev =>prev + 1);
        break;
      case 'bad': setBad(prev => prev + 1);
        break;
      default:
        return;
        
    }

   
  };

  
  const countTotalFeedback = () => {
   
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  
    const total = countTotalFeedback();
    return (
      <div className="section">
        <h2>Please leave Feedback</h2>
        <FeedBackOptions states={{good, bad, neutral}} onFeedback={addFeedback} />
        <h2>Statistics</h2>
        <div>
          {total > 0 ? (
            <Statistics
              states={{good, bad, neutral}}
              total={total}
              percentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </div>
      </div>
    );
  
}
