import { React } from 'react';

import './EmailNotifications.css';

export default function EmailNotifications() {
  return (
    <div className="row">
      <div className="column left" />
      <div className="column middle">
        <h2 className="header1">
          Account Settings
        </h2>
        <hr />
        <h3 className="header2">Your contact email</h3>
        <hr />
        <table>
          <tr>
            <th className="th1">
              Your contact email
            </th>
            <td>email</td>
          </tr>
        </table>
        <hr />
        <h3 className="header3">Emails we send to you</h3>
        <hr />
        <table>
          <tr>
            <th className="th1">
              Notification emails
            </th>
            <td className="td1">

              We send copies of group invitations, new contacts,
              gallery adds & more to your primary email.
              <ul>
                <li>Invitations and other notifications:  Yes</li>
                <li>Contact notifications:  Yes</li>
                <li>Flickr messages from other members:  Yes</li>
                <li>Reminder emails about in-progress wall art and photo books:  Yes</li>
              </ul>
            </td>
            <td className="edit1">edit</td>
          </tr>
          <tr>
            <th className="th1">
              Recent activity emails
            </th>
            <td className="td1">
              We send a summary of your recent uploads and activity to your primary email
              <ul>
                <li>Activity on you and your photos:  Yes</li>
                <li>When your contacts upload new photos or video: Yes (weekly digest)</li>
              </ul>
            </td>
            <td className="edit1">edit</td>
          </tr>
        </table>
      </div>
      <div className="column right" />
    </div>
  );
}
