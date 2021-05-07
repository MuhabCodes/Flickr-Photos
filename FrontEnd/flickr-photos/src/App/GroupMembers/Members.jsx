import React from 'react';
import useFetch from '../useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Members.css';

function Members() {
  const { data: members } = useFetch('http://localhost:8000/members'); // Fetching admins and members data
  // spliting the data in two array one for admins and the other for regular members
  let adminsList = [];
  let regularList = [];
  if (members) {
    adminsList = members.filter((member) => member.Admin);
    regularList = members.filter((member) => !member.Admin);
  }

  return (
    // check that fetching is compelet and dsiplaying data
    members ? (
      <div id="members-main">
        <div className="group-members">
          <br />
          <br />
          <div className="members">
            <h5>
              {/* getting the total number of admins in the group */}
              Admin (
              {members.filter((member) => member.Admin).length}
              )
            </h5>
            {/* displaying admins and their data */}
            <div className="member-list">
              {adminsList.map((admin) => (
                <div className="member-card">
                  <div className="member-card-size">
                    <div className="member-avatar-content">
                      <a href=".">
                        <div className="member-avatar" key={admin.Id} style={{ backgroundImage: `url(${admin.Avatar})` }} />
                      </a>
                    </div>
                    <div className="member-card-text">
                      <div className="member-title" key={admin.Id}>{admin.title}</div>
                      <div className="member-subtitle">
                        <span key={admin.Id}>{admin.Subtitle}</span>
                        {' '}
                        {/* Checking if the member is pro to display the logo */}
                        {admin.Pro && (
                        <a href="/account/upgrade/pro" className="member-pro">
                          <img src="https://i.imgur.com/c0Kf8Rt.jpg" alt="pro" width="17" height="10" />
                        </a>
                        )}
                      </div>
                      <div className="member-links">
                        {/* Checking if the member has photos */}
                        {(admin.Photos !== '') && (
                        <span>
                          <a href="." key={admin.Id}>
                            <i className="member-photo-icon" />
                            {admin.Photos}
                          </a>
                          {' '}
                        </span>
                        )}
                        {/* Checking if the member has followers */}
                        {(admin.Followers !== '') && (
                        <span className="member-followers-icon">
                          <a href="." key={admin.Id}>
                            <i />
                            {admin.Followers}
                          </a>
                        </span>
                        )}
                      </div>
                    </div>
                    {/* Follow button */}
                    <div className="member-follow-button">
                      <button type="button" className="btn btn-primary">+ Follow</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Getting the total number of regular members in the group and display their data */}
          {regularList.length > 0 && (
          <div className="members">
            <h5>
              Member (
              {members.filter((member) => !member.Admin).length}
              )
            </h5>
            <div className="member-list">
              {regularList.map((reg) => (
                <div className="member-card">
                  <div className="member-card-size">
                    <div className="member-avatar-content">
                      <a href=".">
                        <div className="member-avatar" key={reg.Id} style={{ backgroundImage: `url(${reg.Avatar})` }} />
                      </a>
                    </div>
                    <div className="member-card-text">
                      <div className="member-title" key={reg.Id}>{reg.title}</div>
                      <div className="member-subtitle">
                        <span key={reg.Id}>{reg.Subtitle}</span>
                        {' '}
                        {/* Checking if the member is pro to display the logo */}
                        {reg.Pro && (
                        <a href="/account/upgrade/pro" className="member-pro">
                          <img src="https://i.imgur.com/c0Kf8Rt.jpg" alt="pro" width="17" height="10" />
                        </a>
                        )}
                      </div>
                      <div className="member-links">
                        {/* Checking if the member has photos */}
                        {(reg.Photos !== '') && (
                        <span>
                          <a href="." key={reg.Id}>
                            <i className="member-photo-icon" />
                            {reg.Photos}
                          </a>
                          {' '}
                        </span>
                        )}
                        {/* Checking if the member has followers */}
                        {(reg.Followers !== '') && (
                        <span className="member-followers-icon">
                          <a href="." key={reg.Id}>
                            <i />
                            {reg.Followers}
                          </a>
                        </span>
                        )}
                      </div>
                    </div>
                    {/* Adding follow button */}
                    <div className="member-follow-button">
                      <button type="button" className="btn btn-primary">+ Follow</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    ) : <h1>Loading...</h1>

  );
}

export default Members;
