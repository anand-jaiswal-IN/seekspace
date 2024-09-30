import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";

export default function Component() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          seekspace.club
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="/user_icon.png"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Seeks Space</span>
            <span className="block truncate text-sm font-medium">
              seekspace@club.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Events</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
        <NavbarLink href="/auth/login">Login</NavbarLink>
        <NavbarLink href="/auth/register">Register</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
