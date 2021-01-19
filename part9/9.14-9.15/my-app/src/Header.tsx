import React from "react";

interface Props {
  name: string;
}

const Header: React.FC<Props> = ({ name }) => <h1>{name}</h1>;

export default Header;
