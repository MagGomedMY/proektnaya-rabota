// ============================================
// 1. СПИСОК КНИГ (наша база данных)
// ============================================
const books = [
    // ========== ХУДОЖЕСТВЕННАЯ ЛИТЕРАТУРА (fiction) ==========
    { id: 1, title: "Мастер и Маргарита", author: "Михаил Булгаков", price: 550, category: "fiction" },
    { id: 2, title: "Война и мир", author: "Лев Толстой", price: 750, category: "fiction" },
    { id: 3, title: "Преступление и наказание", author: "Фёдор Достоевский", price: 480, category: "fiction" },
    { id: 4, title: "1984", author: "Джордж Оруэлл", price: 420, category: "fiction" },
    { id: 5, title: "Анна Каренина", author: "Лев Толстой", price: 650, category: "fiction" },
    { id: 6, title: "Тихий Дон", author: "Михаил Шолохов", price: 700, category: "fiction" },
    { id: 7, title: "Отцы и дети", author: "Иван Тургенев", price: 350, category: "fiction" },
    { id: 8, title: "Евгений Онегин", author: "Александр Пушкин", price: 300, category: "fiction" },
    { id: 9, title: "Герой нашего времени", author: "Михаил Лермонтов", price: 280, category: "fiction" },
    { id: 10, title: "Мёртвые души", author: "Николай Гоголь", price: 400, category: "fiction" },
    { id: 11, title: "Братья Карамазовы", author: "Фёдор Достоевский", price: 600, category: "fiction" },
    { id: 12, title: "Собачье сердце", author: "Михаил Булгаков", price: 320, category: "fiction" },
    { id: 13, title: "Доктор Живаго", author: "Борис Пастернак", price: 550, category: "fiction" },
    { id: 14, title: "Три товарища", author: "Эрих Мария Ремарк", price: 450, category: "fiction" },
    { id: 15, title: "Великий Гэтсби", author: "Фрэнсис Фицджеральд", price: 380, category: "fiction" },

    // ========== УЧЕБНАЯ ЛИТЕРАТУРА (study) ==========
    { id: 16, title: "Математика 5 класс", author: "Виленкин Н.Я.", price: 400, category: "study" },
    { id: 17, title: "Физика 9 класс", author: "Перышкин А.В.", price: 450, category: "study" },
    { id: 18, title: "Химия 8 класс", author: "Габриелян О.С.", price: 420, category: "study" },
    { id: 19, title: "История России 10 класс", author: "Сахаров А.Н.", price: 500, category: "study" },
    { id: 20, title: "Обществознание ЕГЭ", author: "Котова О.А.", price: 550, category: "study" },
    { id: 21, title: "Русский язык ЕГЭ", author: "Цыбулько И.П.", price: 480, category: "study" },
    { id: 22, title: "Английский язык 7 класс", author: "Афанасьева О.В.", price: 430, category: "study" },
    { id: 23, title: "Биология 6 класс", author: "Пасечник В.В.", price: 380, category: "study" },
    { id: 24, title: "География 8 класс", author: "Алексеев А.И.", price: 410, category: "study" },
    { id: 25, title: "Информатика 10 класс", author: "Босова Л.Л.", price: 460, category: "study" },
    { id: 26, title: "Литература 9 класс", author: "Коровина В.Я.", price: 500, category: "study" },
    { id: 27, title: "Алгебра 11 класс", author: "Мордкович А.Г.", price: 440, category: "study" },
    { id: 28, title: "Геометрия 10-11 класс", author: "Атанасян Л.С.", price: 470, category: "study" },
    { id: 29, title: "Окружающий мир 3 класс", author: "Плешаков А.А.", price: 350, category: "study" },
    { id: 30, title: "Экономика для студентов", author: "Булатов А.С.", price: 600, category: "study" },

    // ========== ДЕТСКАЯ ЛИТЕРАТУРА (kids) ==========
    { id: 31, title: "Колобок", author: "Народная сказка", price: 100, category: "kids" },
    { id: 32, title: "Сказки Пушкина", author: "Александр Пушкин", price: 250, category: "kids" },
    { id: 33, title: "Винни-Пух", author: "Алан Милн", price: 350, category: "kids" },
    { id: 34, title: "Незнайка на Луне", author: "Николай Носов", price: 400, category: "kids" },
    { id: 35, title: "Маленький принц", author: "Антуан де Сент-Экзюпери", price: 300, category: "kids" },
    { id: 36, title: "Алиса в стране чудес", author: "Льюис Кэрролл", price: 380, category: "kids" },
    { id: 37, title: "Три поросёнка", author: "Сергей Михалков", price: 120, category: "kids" },
    { id: 38, title: "Буратино", author: "Алексей Толстой", price: 280, category: "kids" },
    { id: 39, title: "Крокодил Гена и его друзья", author: "Эдуард Успенский", price: 320, category: "kids" },
    { id: 40, title: "Мойдодыр", author: "Корней Чуковский", price: 150, category: "kids" },
    { id: 41, title: "Денискины рассказы", author: "Виктор Драгунский", price: 330, category: "kids" },
    { id: 42, title: "Волшебник Изумрудного города", author: "Александр Волков", price: 420, category: "kids" },
    { id: 43, title: "Приключения Чиполлино", author: "Джанни Родари", price: 310, category: "kids" },
    { id: 44, title: "Карлсон, который живёт на крыше", author: "Астрид Линдгрен", price: 370, category: "kids" },
    { id: 45, title: "Репка", author: "Народная сказка", price: 90, category: "kids" },
    { id: 46, title: "Теремок", author: "Народная сказка", price: 95, category: "kids" },
    { id: 47, title: "Курочка Ряба", author: "Народная сказка", price: 85, category: "kids" },
    { id: 48, title: "Маша и медведь", author: "Народная сказка", price: 100, category: "kids" },
    { id: 49, title: "Гарри Поттер и философский камень", author: "Джоан Роулинг", price: 600, category: "kids" },
    { id: 50, title: "Хроники Нарнии", author: "Клайв Льюис", price: 550, category: "kids" },
    { id: 51, title: "Пеппи Длинныйчулок", author: "Астрид Линдгрен", price: 340, category: "kids" },
    { id: 52, title: "Кот в сапогах", author: "Шарль Перро", price: 130, category: "kids" },
    { id: 53, title: "Красная шапочка", author: "Шарль Перро", price: 110, category: "kids" },
    { id: 54, title: "Снежная королева", author: "Ганс Христиан Андерсен", price: 290, category: "kids" },
    { id: 55, title: "Русалочка", author: "Ганс Христиан Андерсен", price: 270, category: "kids" }
];

// ============================================
// 2. КОРЗИНА
// ============================================
// Корзина - это массив объектов. Каждый объект - книга + количество
let cart = [];

// ============================================
// 3. ПОКАЗАТЬ КНИГИ НА ЭКРАНЕ
// ============================================
function showBooks(booksToShow) {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';
    
    booksToShow.forEach(book => {
        const bookCard = `
            <div class="book-card">
                <h3>${book.title}</h3>
                <p>Автор: ${book.author}</p>
                <p class="price">${book.price} ₽</p>
                <button onclick="addToCart(${book.id})">
                    В корзину
                </button>
            </div>
        `;
        booksList.innerHTML += bookCard;
    });
}

// ============================================
// 4. ДОБАВИТЬ В КОРЗИНУ
// ============================================
function addToCart(bookId) {
    // Ищем книгу
    const book = books.find(b => b.id === bookId);
    
    // Проверяем, есть ли уже такая книга в корзине
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        // Если есть - увеличиваем количество
        existingItem.quantity += 1;
    } else {
        // Если нет - добавляем новую с количеством 1
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            quantity: 1
        });
    }
    
    // Обновляем счетчик в шапке
    updateCartCount();
    
    // Показываем уведомление
    alert(book.title + ' добавлена в корзину!');
}

// ============================================
// 5. ОБНОВИТЬ СЧЕТЧИК КОРЗИНЫ
// ============================================
function updateCartCount() {
    // Считаем общее количество товаров
    let totalItems = 0;
    cart.forEach(item => {
        totalItems += item.quantity;
    });
    
    // Обновляем цифру в шапке
    document.getElementById('cartCount').textContent = totalItems;
}

// ============================================
// 6. ОТКРЫТЬ ОКНО КОРЗИНЫ
// ============================================
function openCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Если корзина пустая
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Корзина пуста</div>';
        cartTotal.innerHTML = '';
    } else {
        // Показываем все товары
        cartItems.innerHTML = '';
        
        cart.forEach((item, index) => {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <strong>${item.title}</strong>
                        <p>${item.price} ₽ × ${item.quantity} = ${item.price * item.quantity} ₽</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
                    </div>
                </div>
            `;
        });
        
        // Считаем и показываем общую сумму
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        
        cartTotal.innerHTML = `<h3>Итого: ${total} ₽</h3>`;
    }
    
    // Показываем модальное окно
    document.getElementById('cartModal').style.display = 'block';
}

// ============================================
// 7. ИЗМЕНИТЬ КОЛИЧЕСТВО ТОВАРА
// ============================================
function changeQuantity(index, change) {
    cart[index].quantity += change;
    
    // Если количество стало 0 или меньше - удаляем товар
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    // Обновляем счетчик и перерисовываем корзину
    updateCartCount();
    openCart();
}

// ============================================
// 8. УДАЛИТЬ ТОВАР ИЗ КОРЗИНЫ
// ============================================
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    openCart();
}

// ============================================
// 9. ЗАКРЫТЬ КОРЗИНУ
// ============================================
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// ============================================
// 10. ОТКРЫТЬ ОФОРМЛЕНИЕ ЗАКАЗА
// ============================================
function openCheckout() {
    // Закрываем корзину
    closeCart();
    
    // Если корзина пустая - не открываем оформление
    if (cart.length === 0) {
        alert('Корзина пуста! Добавьте книги.');
        return;
    }
    
    // Считаем и показываем сумму заказа
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    
    document.getElementById('checkoutTotal').textContent = 'Сумма заказа: ' + total + ' ₽';
    
    // Открываем окно оформления
    document.getElementById('checkoutModal').style.display = 'block';
}

// ============================================
// 11. ЗАКРЫТЬ ОФОРМЛЕНИЕ
// ============================================
function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
    // Возвращаемся в корзину
    openCart();
}

// ============================================
// 12. ОТПРАВИТЬ ЗАКАЗ
// ============================================
function submitOrder() {
    // Получаем данные из формы
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const payment = document.getElementById('paymentMethod').value;
    const comment = document.getElementById('comment').value;
    
    // Проверяем, что обязательные поля заполнены
    if (name === '' || phone === '' || address === '') {
        alert('Заполните все обязательные поля: имя, телефон и адрес!');
        return;
    }
    
    // Считаем сумму
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    
    // Формируем заказ (в реальном проекте отправили бы на сервер)
    const order = {
        customer: {
            name: name,
            phone: phone,
            address: address,
            payment: payment,
            comment: comment
        },
        items: cart,
        total: total,
        date: new Date().toLocaleString()
    };
    
    // Выводим заказ в консоль (для проверки)
    console.log('Новый заказ:', order);
    
    // Очищаем корзину
    cart = [];
    updateCartCount();
    
    // Закрываем окно оформления
    document.getElementById('checkoutModal').style.display = 'none';
    
    // Очищаем форму
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('comment').value = '';
    
    // Показываем окно успеха
    document.getElementById('successModal').style.display = 'block';
}

// ============================================
// 13. ЗАКРЫТЬ ОКНО УСПЕХА
// ============================================
function closeSuccess() {
    document.getElementById('successModal').style.display = 'none';
}

// ============================================
// 14. ФИЛЬТРАЦИЯ ПО КАТЕГОРИЯМ
// ============================================
function filterBooks(category) {
    if (category === 'all') {
        showBooks(books);
    } else {
        const filtered = books.filter(book => book.category === category);
        showBooks(filtered);
    }
}

// ============================================
// 15. ПОИСК КНИГ
// ============================================
document.getElementById('search').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    
    if (searchText === '') {
        showBooks(books);
    } else {
        const found = books.filter(book => 
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText)
        );
        showBooks(found);
    }
});

// ============================================
// 16. ЗАПУСК ПРИЛОЖЕНИЯ
// ============================================
showBooks(books);
