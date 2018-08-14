/// Get Visible Expenses

export default (expenses, { text, startDate, endDate, sortBy }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endtDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? -1 : 1;
        } else if (sortBy === 'amount') {
            return a.amount <= b.amount ? 1 : -1;
        }
    });
}