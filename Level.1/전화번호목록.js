function solution(phone_book) {    
    phone_book.sort();
    for (let i = 0; i < phone_book.length - 1; i++) {        
        for (let j = i + 1; j < phone_book.length; j++) {
            if (phone_book[j].startsWith(phone_book[i])) {
                return false;
            }
        }
    }
    return true;
}

