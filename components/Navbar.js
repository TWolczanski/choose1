import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import styles from "../styles/Navbar.module.css";
import AccountForm from "./AccountForm";
import {useModal} from "../context/ModalContext";
import {useUser} from "../context/UserContext";
import Points from "./Points";
import Avatar from "./Avatar";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "./Dropdown";
import NewPostForm from "./NewPostForm";
import {useRouter} from "next/router";
import Settings from "./Settings";

export default function Navbar() {
  const {setContent} = useModal();
  const {user, setUser} = useUser();
  const router = useRouter();
  return (
    <header className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>
          <Logo variant="dark" />
        </a>
      </Link>
      <Nav className={styles.nav} />
      {user ? (
        <div className={styles.user}>
          <Points amount={user.points.allTime} />
          <Dropdown>
            <DropdownToggle>
              <Avatar img={user.avatar} size="small" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => router.push(`/users/${user.id}`)}>
                My profile
              </DropdownItem>
              <DropdownItem onClick={() => setContent(<NewPostForm />)}>
                New post
              </DropdownItem>
              <DropdownItem onClick={() => setContent(<Settings />)}>
                Settings
              </DropdownItem>
              <DropdownItem onClick={() => setUser()}>Sign out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      ) : (
        <div className={styles.buttons}>
          <Button
            variant="light"
            text="Sign in"
            onClick={() =>
              setContent(
                <AccountForm register={false} onSubmit={() => setContent()} />
              )
            }
          ></Button>
          <Button
            variant="primary"
            text="Sign up"
            onClick={() =>
              setContent(
                <AccountForm register={true} onSubmit={() => setContent()} />
              )
            }
          ></Button>
        </div>
      )}
    </header>
  );
}
