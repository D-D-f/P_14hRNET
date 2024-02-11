import UserNameProfil from "../../Component/UserNameProfil/UserNameProfil.tsx";
import "../../assets/scss/PagesStyle/UserPage.scss";

const UserPage = () => {

    const transactions = [{
        accountName: "Argent Bank Checking",
        accountNumber: "x8349",
        currentBalance: "2082.79",
        availableBalance: 2082.79,
    },
        {
            accountName: "Argent Bank Savings",
            accountNumber: "x6712",
            currentBalance: "10.928.42",
            availableBalance: 2082.79,
        },
        {
            accountName: "Argent Bank Credit Card",
            accountNumber: "x8349",
            currentBalance: "184.30",
            availableBalance: 2082.79,
        }]

    return (
        <div className="mainUserPage">
            <UserNameProfil/>
        </div>
    )
}

export default UserPage;