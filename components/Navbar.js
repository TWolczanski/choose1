import Link from "next/link";
import Logo from "components/Logo";
import Nav from "components/Nav";
import Button from "components/Button";
import styles from "styles/Navbar.module.css";
import AccountForm from "components/AccountForm";
import {useModal} from "context/ModalContext";
import {useUser} from "context/UserContext";
import Points from "components/Points";
import Avatar from "components/Avatar";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "components/Dropdown";
import NewPostForm from "components/NewPostForm";
import {useRouter} from "next/navigation";
import Settings from "components/Settings";

export default function Navbar() {
  const {setContent} = useModal();
  const {user, setUser} = useUser();
  const router = useRouter();
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Logo variant="dark" />
      </Link>
      <div className={styles.navWrapper}>
        <Nav className={styles.nav} />
      </div>
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
            onClick={
              () => router.push("/sign-in")
              // setContent(
              //   <AccountForm
              //     register={false}
              //     onSubmit={() => setContent()}
              //     className={styles.accountForm}
              //   />
              // )
            }
            className={styles.signInBtn}
          ></Button>
          <Button
            variant="primary"
            text="Sign up"
            onClick={
              () => router.push("/sign-up")
              // setContent(
              //   <AccountForm
              //     register={true}
              //     onSubmit={() => setContent()}
              //     className={styles.accountForm}
              //   />
              // )
            }
            className={styles.signUpBtn}
          ></Button>
        </div>
      )}
    </header>
  );
}
