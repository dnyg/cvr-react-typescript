import React from 'react'

type IconProps = {
  faIcon: string;
  id: number;
}

export const Icon = ({ faIcon, id }: IconProps) => (
  <>
    <p key={id}>
      <i className={faIcon}></i>
    </p>
  </>
)
