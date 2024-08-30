import styles from "../styles/navbar.module.css";




export default function Navbar(){
    return(

        // <div>
        <div className={styles.Navbar}>


            <div className={styles.company}>
                <img className={styles.logo} src="../../logo_white.png"></img>


            </div>
            <hr></hr>


            {/* orders  */}
            <div className={styles.orderbar}>
                <h1> <strong> ORDERS </strong> </h1>
                <ul>
                    <li classname= {styles.place}> Place Order </li>
                    <li classname= {styles.active}> Active Order </li>
                    <li classname= {styles.complete}> Complete Order </li>
                </ul>
            </div>
            {/* orders end  */}

            <hr></hr>

            {/* Suppliers  */}
            <div className={styles.supplierbar}>
                <h1> <strong> SUPPLIERS </strong> </h1>
                <ul>
                    <li classname= {styles.addS}> Add Supplier </li>
                    <li classname= {styles.viewS}> View Supplier </li>
                   
                </ul>
             </div>
            {/* suppliers end  */}

            <hr></hr>

            {/* Users  */}
            <div className={styles.userbar}>
                <h1> <strong> USERS </strong> </h1>
                <ul>
                    <li classname= {styles.addU}> Add User </li>
                    <li classname= {styles.viewU}> View User </li>
                   
                </ul>
            </div>
             {/* Users end  */}







        </div>

    )
}