// custom hook to get month and day from given date
const useGetMonthAndDay = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString('default', { month: 'long' });

    return {
        day,
        month
    };
}

export default useGetMonthAndDay;