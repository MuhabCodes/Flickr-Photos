import { React } from 'react';

import './EmailNotifications.css';

export default function EmailNotifications() {
  return (
    <div className="row">
      <div className="column left" />
      <div className="column middle">
        <h2 className="header-account-settings">
          Account Settings
        </h2>
        <hr className="gap-in-between" />
        <h3 className="header-contact-email">Your contact email</h3>
        <hr className="gap-in-between" />
        <table>
          <tr className="tr-default-settings">
            <th className="th-default-settings">
              Your contact email
            </th>
            <td className="edit-default-settings">email</td>
          </tr>
        </table>
        <hr className="gap-in-between" />
        <h3 className="header-emails-to-send">Emails we send to you</h3>
        <hr className="gap-in-between" />
        <table>
          <tr className="tr-default-settings">
            <th className="th-default-settings">
              Notification emails
            </th>
            <td className="td-default-settings">

              We send copies of group invitations, new contacts,
              gallery adds & more to your primary email.
              <ul>
                <li>Invitations and other notifications:  Yes</li>
                <li>Contact notifications:  Yes</li>
                <li>Flickr messages from other members:  Yes</li>
                <li>Reminder emails about in-progress wall art and photo books:  Yes</li>
              </ul>
            </td>
            <td className="edits-default-settings">edit</td>
          </tr>
          <tr className="tr-default-settings">
            <th className="th-default-settings">
              Recent activity emails
            </th>
            <td className="td-default-settings">
              We send a summary of your recent uploads and activity to your primary email
              <ul>
                <li>Activity on you and your photos:  Yes</li>
                <li>When your contacts upload new photos or video: Yes (weekly digest)</li>
              </ul>
            </td>
            <td className="edit-default-settings">edit</td>
          </tr>
        </table>
      </div>
      <div className="column right" />
    </div>
  );
}
