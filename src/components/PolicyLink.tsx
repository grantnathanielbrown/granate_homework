import React from 'react';
import { Policy } from './IndividualPolicy';

interface PolicyLinkProps {
    policy: Policy,
    displayPolicy: (policy: Policy) => void
}

export default function PolicyLink(props: PolicyLinkProps) {
  return (
    // if I had an external CSS file, I would have used the :active pseudo-class to style the link with a grey background when clicked on. If for example, I was using react-router for the policy links, it would also have a built in config for when the link is active.
    <li style={{color: "blue", fontWeight: "bold" }} key={props.policy.UID}>
        <img src={folder} alt="icon of an opened folder" />
        <span onClick={() => props.displayPolicy(props.policy)}>{props.policy.name}</span>
    </li>
  )
}
