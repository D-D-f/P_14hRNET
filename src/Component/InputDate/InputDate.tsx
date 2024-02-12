const InputDate = () => {
    const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
    let years = []

    for(let i = 1950; i <= 2050; i++) {
        years.push(i)
    }

    console.log(years)

    return (
        <div>

        </div>
    )
}

export default InputDate;