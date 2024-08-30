import styles from "../styles/navbar.module.css";




export default function Navbar(){
    return(

        // <div>
        <div className={styles.Navbar}>


            <div className={styles.company}><a href="./">
                <img className={styles.logo} src="../../logo_white.png"></img></a>


            </div>
            <hr></hr>


            {/* orders  */}
            <div className={styles.orderbar}>
                <h1> <strong> ORDERS </strong> </h1>
                <ul>
                    <li classname= {styles.place}><a href="./createorder"> Place Order </a></li>
                    <li classname= {styles.active}> <a href="./activeorders">Active Order</a> </li>
                    <li classname= {styles.complete}> <a href="./completedorders">Complete Order</a> </li>
                </ul>
            </div>
            {/* orders end  */}

            <hr></hr>

            {/* Suppliers  */}
            <div className={styles.supplierbar}>
                <h1> <strong> SUPPLIERS </strong> </h1>
                <ul>
                    <li classname= {styles.addS}> <a href="./addsupplier">Add Supplier</a> </li>
                    <li classname= {styles.viewS}> <a href="./supplier">View Supplier</a> </li>
                   
                </ul>
             </div>
            {/* suppliers end  */}

            <hr></hr>

            {/* Users  */}
            <div className={styles.userbar}>
                <h1> <strong> USERS </strong> </h1>
                <ul>
                    <li classname= {styles.addU}> <a href="./adduser">Add User</a> </li>
                    <li classname= {styles.viewU}> <a href="./user">View User</a> </li>
                   
                </ul>
            </div>
             {/* Users end  */}







        </div>

    )
}