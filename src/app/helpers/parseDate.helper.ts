export function paserDate(dateNow: Date): string {
    const day = String(dateNow.getDate()).padStart(2, '0');
    const month = String(dateNow.getMonth() + 1).padStart(2, '0');
    const year = dateNow.getFullYear();
    return `${day}-${month}-${year}`;
}

export function formatDate(date: Date): string {

    date.setTime(date.getTime() - (5 * 60 * 60 * 1000));

    
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;

}