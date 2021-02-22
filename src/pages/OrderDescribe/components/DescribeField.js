import React from 'react';

const DescribeField = _ => {
  return (
    <div id="DescribeField" style={{ height: 'auto', borderRadius: 8, marginBottom: 32, }}>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32 }}>
        <h4>What kind of request do you want?</h4>

        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name of your art</label>
            <input type="text" className="form-control" id="name" aria-describedby="titleHelp" />
            <div id="titleHelp" className="form-text">Keep it simple but powerful.</div>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ borderRadius: 8, height: 100 }}></textarea>
            <label htmlFor="floatingTextarea">Describe</label>
          </div>
          <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default DescribeField;
