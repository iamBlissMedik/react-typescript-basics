

export type Name = {
  firstName: string;
  lastName: string;
};

export type PersonProps = {
  name: Name;
};

export type PersonsListProps = {
  names: Name[];
};
