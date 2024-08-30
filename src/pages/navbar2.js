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
                    <li classname= {styles.active}> <a href="./activeordersupplier">Active Order</a> </li>
                    <li classname= {styles.complete}> <a href="./completedordersupplier">Complete Order</a> </li>
                </ul>
            </div>
            {/* orders end  */}

            <hr></hr>

            {/* Suppliers  */}
            <div className={styles.supplierbar}>
                <h1> <strong> SUPPLIERS </strong> </h1>
                <ul>
                    <li classname= {styles.viewS}> <a href="./supplierprofile">View Supplier</a> </li>
                   
                </ul>
             </div>
            {/* suppliers end  */}

            <hr></hr>

         







        </div>

    )
}