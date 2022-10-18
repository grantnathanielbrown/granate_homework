import React, { ChangeEvent } from 'react';

export interface Policy {
    name: string,
    description: string,
    enabled: boolean,
    requirements: string[],
    UID: string | null,
}

interface PolicyProps {
    policy: Policy,
    children: React.ReactNode,
    changeName: (event: React.ChangeEvent<HTMLInputElement>, UID: string) => void,
    changeDescription: (event: React.ChangeEvent<HTMLInputElement>, UID: string) => void,
    togglePolicyStatus: (event: React.ChangeEvent<HTMLInputElement>, UID: string) => void,
}

export default function IndividualPolicy(props: PolicyProps) {
  return (
    <div>
      <span style={{margin: "0 1em 0 0", fontWeight: "bold"}}>Policy Name: </span>
      <input style={{backgroundColor: "grey", borderRadius: ".5em"}} type="text" value={props.policy.name} />
      <span style={{margin: "0 1em 0 0", fontWeight: "bold"}}>Description: </span>
      <input style={{backgroundColor: "grey", borderRadius: ".5em", height: "20em", width: "20em"}} type="text" value={props.policy.description} />
      <span style={{
        backgroundColor: props.policy.enabled ? "green" : "red",
      }}>{`Policy ${props.policy.enabled ? "enabled" : "disabled"}`}</span>
      <button style={{color: "blue"}} onClick={(e) => props.togglePolicyStatus(e,props.policy.UID)}>{props.policy.enabled ? "Disable" : "Enable"}</button>
      {/* author, save changes, run, and delete ignored. */}
    </div>
  )
}
