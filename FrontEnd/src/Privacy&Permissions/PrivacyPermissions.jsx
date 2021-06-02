import { React } from 'react';

import './PrivacyPermissions.css';

export default function PrivacyPermissions() {
  return (
    <div className="row">
      <div className="column left" />
      <div className="column middle">
        <h2 className="header1">
          Account Settings
        </h2>
        <hr className="hr22" />
        <h3 className="header2">Global Settings</h3>
        <hr className="hr22" />
        <table>
          <tr>
            <th className="th1">
              Who can download your images
              <br />
              (including originals)?
            </th>
            <td className="td1">Anyone</td>
            <td className="edit1">edit</td>
          </tr>
          <tr>
            <th className="th1">
              Largest shared image size
            </th>
            <td className="td1">Best display size</td>
            <td className="edit1">edit</td>
          </tr>
          <tr>
            <th className="th1">
              Allow others to share your stuff
            </th>
            <td className="td1">Yes</td>
            <td className="edit1">edit</td>
          </tr>
          <tr>
            <th className="th1">
              Who can add you to a photo?
            </th>
            <td className="td1">Any flickr member</td>
            <td className="edit1">edit</td>
          </tr>
          <tr>
            <th className="th1">
              Hide your profile from public
              <br />
              searches
            </th>
            <td className="td1">No</td>
            <td className="edit1">edit</td>
          </tr>
          <tr>
            <th className="th1">
              Who can see what on your profile
            </th>
            <td className="td1">Anyone</td>
            <td className="edit1">edit</td>
          </tr>
        </table>
        <h3 className="header3">Defaults for new uploads</h3>
        <table>
          <tr>
            <th className="th1">
              Who will be able to see, comment on,
              <br />
              add notes, or add people
            </th>
            <td className="td1">
              <ul>
                <li>See: Anyone</li>
                <li>Comment on: Any Flickr user</li>
                <li>Add notes, tags, and people: People you follow</li>
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
