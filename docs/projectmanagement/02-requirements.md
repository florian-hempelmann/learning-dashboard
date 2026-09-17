# Requirements - Implementation of a Learning Dashboard

The Requirements might be updated during the implemantation of some features.
The Priority is based on the MoSCoW principle.

### Functional

| ID   | Requirement                                            | Acceptance criteria                                                                                                                                                                                                                                        | Priority |
| ---- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| F-01 | Homepage visualizes important data                     | One Cart includes a Bar Chart with filter option for categories. Categories will be measured based on time spent. One Cart includes the total numbers of completions. Other Carts include Active Goals, Active Projects (and out of scope: last Sessions). | Must     |
| F-02 | Creating and editing languages                         | For Admin only; create, edit and delete                                                                                                                                                                                                                    | Must     |
| F-03 | Creating and editing frameworks                        | For Admin only; create, edit and delete                                                                                                                                                                                                                    | Must     |
| F-04 | Creating and editing Learngoals and Learnsubjects      | For Users; create, edit and delete                                                                                                                                                                                                                         | Must     |
| F-05 | Creating and editing Projects                          | For Users; create, edit and delete                                                                                                                                                                                                                         | Must     |
| F-06 | Creating and editing certificates                      | For Users; create, edit and delete                                                                                                                                                                                                                         | Should   |
| F-07 | Creating and editing dev-categories                    | For Admin only; create, edit and delete                                                                                                                                                                                                                    | Could    |
| F-08 | Authentication (Login/Logout) with Role: User or Admin | Dashboard is only accessible via login. Admin maintains the Structure of languages and frameworks. User maintains their projects, goals (and certificates).                                                                                                | Must     |
| F-09 | Navigationbar                                          | Navigation-Items can only be seen for authorized user roles                                                                                                                                                                                                | Must     |
| F-10 | Editable User Profile                                  | Editable email, username and password                                                                                                                                                                                                                      | Should   |
| F-11 | User Registration                                      | User can be registered through email verification                                                                                                                                                                                                          | Must     |
| F-12 | Creating Sessions                                      | For Users                                                                                                                                                                                                                                                  | Should   |
| F-13 | Header                                                 | With logo and title                                                                                                                                                                                                                                        | Must     |

### Nonfunctional

| ID    | Requirement                | Acceptance criteria                                                           | Priority |
| ----- | -------------------------- | ----------------------------------------------------------------------------- | -------- |
| NF-01 | Consistent Theme           | Including Colors, Fonts, Usage of UI Components                               | Must     |
| NF-02 | Lightmode/Darkmode         | Switching between those two is implemented                                    | Could    |
| NF-03 | Database Setup             | Database with all neccessary tables and junction tables are created           | Must     |
| NF-04 | Intuitive UX               | The UX should be easy and straight forward                                    | Must     |
| NF-05 | Security                   | hashed passwords, userdata is stored via pseudonymous identifiers if possible | Must     |
| NF-06 | Privacy and Security Pages | An imprint is accessible from the application                                 | Must     |
