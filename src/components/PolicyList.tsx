import React, { useEffect } from 'react';
import IndividualPolicy, { Policy } from './IndividualPolicy';
import PolicyLink from './PolicyLink';

// Unclear what props it would be receiving from the parent component.
export default function PolicyList() {

    const [policies, setPolicies] = React.useState<Policy[]>([]);
    const [displayedPolicy, setDisplayedPolicy] = React.useState({
      name: "",
      description: "",
      enabled: false,
      requirements: [],
      UID: null,
    });
    useEffect(() => {
        // Logic for getting policy objects from the backend. We could also choose to get them in App.tsx and pass them down as props. 
        // Asynchronously fetch the data, then set the policies state variable.
        // Set displayedPolicy to the first policy in the list (index 0).
        // 2nd argument is an empty array, so this only runs once. We are assuming that we dont want the policy list to change based on other users updating it, unless the user refreshes the page
    },[]);
    function displayPolicy(policy: Policy) {
      // setDisplayedPolicy(policy);
    }

    // You could potentially combine the following functions into a single function. However, you would end up having to include logic that determines which property of the policy object you need to change, anyways.

    function changeName(event: React.ChangeEvent<HTMLInputElement>, UID: string) {
      // Clone list of policies
      // Find the policy in the list that matches the UID
      // Change the name of that policy (will be event.target.value)
      // setDisplayedPolicy to the policy we just changed
      // setPolicies(clonedPolicies);
    }

    function changeDescription(event: React.ChangeEvent<HTMLInputElement>, UID: string) {
      // Same as above, just for the description property
    }

    function togglePolicyStatus(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, UID: string) {
      // Same as above, just for toggling enabled property
    }

  return (
    <div>
        {policies.map((policy: Policy) => {
            return (
                <PolicyLink displayPolicy={displayPolicy} policy={policy} />
            )
        })}
        {/* TypeScript complains here because displayedPolicy is initially set to undefined. This can be solved in a variety of ways - could write an exception, could create a loading screen for when the 1st policy hasnt been loaded (depending on the load time), could initialize it with empty fields. I chose to initialize it with empty fields. */}
        <IndividualPolicy policy={displayedPolicy} changeName={(e) => changeName(e,UID)} changeDescription={(e) => changeDescription(e,UID)} togglePolicyStatus={(e) => togglePolicyStatus(e,UID)}>
          {displayedPolicy.requirements.map((requirement: string) => {
            return (
              <div>
                <img src={checkmark} alt="checkmark" />
                <span>{requirement}</span>
              </div>
            )
          })}
        </IndividualPolicy>
        
    </div>
  )
}
