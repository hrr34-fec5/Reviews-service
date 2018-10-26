import React from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Review =({reviewEntry})=> (
  <div className = 'review-entry'>
    <div className = 'review-author'>
      <img className = 'review-author-avatar' src={reviewEntry.avatarUrl} />
      <div/>
      <div className = 'review-author-name'>
        {reviewEntry.author}
        <div className = 'review-author-date'>
          {monthNames[new Date(reviewEntry.createdAt).getMonth()]+' '+new Date(reviewEntry.createdAt).getFullYear()}
        </div>
      </div>
    </div>

    <div className = 'review-entry-text'>
      {reviewEntry.reviewText.slice(0,140)+'...'}

      <div className = 'review-entry-text-full' style = 'display:none'>
        {reviewEntry.reviewText}
        {// <Review reviewEntry={reviewEntry.reply} />
        }
      </div>

      <button type="button" className="review-readmore" onClick={()=> {
        $('button').closest('.review-entry-text-full').style.display = 'block';
        $('button').closest('.review-entry-text').style.display = 'none';
        }}>Read more</button>

    </div>

    <div className="review-entry-border"></div>

  </div>
);

export default Review;