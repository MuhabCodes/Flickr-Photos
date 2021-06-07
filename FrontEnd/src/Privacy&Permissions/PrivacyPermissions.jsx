import { React } from 'react';

import './PrivacyPermissions.css';

export default function PrivacyPermissions() {
  return (
    <div className="row">
      <div className="column left" />
      <div className="column middle">
        <h2 className="header-account-settings">
          Account Settings
        </h2>
        <hr className="hr-border-inbetween" />
        <h3 className="header-global-settings">Global Settings</h3>
        <hr className="hr-border-inbetween" />
        <table>
          <tr className="table-row-default">
            <th className="table-headers-default">
              Who can download your images
              <br />
              (including originals)?
            </th>
            <td className="table-data-default">Anyone</td>
            <td className="edit-default-settings">edit</td>
          </tr>
          <tr className="table-row-default">
            <th className="table-headers-default">
              Largest shared image size
            </th>
            <td className="table-data-default">Best display size</td>
            <td className="edit-default-settings">edit</td>
          </tr>
          <tr className="table-row-default">
            <th className="table-headers-default">
              Allow others to share your stuff
            </th>
            <td className="table-data-default">Yes</td>
            <td className="edit-default-settings">edit</td>
          </tr>
          <tr className="table-row-default">
            <th className="table-headers-default">
              Who can add you to a photo?
            </th>
            <td className="table-data-default">Any flickr member</td>
            <td className="edit-default-settings">edit</td>
          </tr>
          <tr className="table-row-default">
            <th className="table-headers-default">
              Hide your profile from public
              <br />
              searches
            </th>
            <td className="table-data-default">No</td>
            <td className="edit-default-settings">edit</td>
          </tr>
          <tr className="table-row-default">
            <th className="table-headers-default">
              Who can see what on your profile
            </th>
            <td className="table-data-default">Anyone</td>
            <td className="edit-default-settings">edit</td>
          </tr>
        </table>
        <h3 className="header-for-new-uploads">Defaults for new uploads</h3>
        <table>
          <tr className="table-row-default">
            <th className="table-headers-default">
              Who will be able to see, comment on,
              <br />
              add notes, or add people
            </th>
            <td className="table-data-default">
              <ul>
                <li>See: Anyone</li>
                <li>Comment on: Any Flickr user</li>
                <li>Add notes, tags, and people: People you follow</li>
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
