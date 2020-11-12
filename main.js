// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================


// function Description(titleOfTag , action, attrs) {
    
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//      }

//     let a = new Description (titleOfTag = '<a>',
//     action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     attrs = [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'},
//         {titleOfAttr: 'coords' , actionOfAttr:'Устанавливает координаты активной области.'}
//     ]);
    
//     let div = new Description (titleOfTag = '<div>',
//     action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
//     attrs = [
//         {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>. ссылки с помощью комбинации клавиш'},
//         {titleOfAttr: 'title' , actionOfAttr:'Добавляет всплывающую подсказку к содержимому. координаты активной области.'},
//     ]);
    
    
//     let h1 = new Description (titleOfTag = '<h1>',
//     action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
//     attrs = [
//         {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
//     ]);
    
//     let span = new Description (titleOfTag = '<span>',
//     action = 'HTML Тег <span> предназначен для определения строчных элементов документа.',
//     attrs = [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//         {titleOfAttr: 'class', actionOfAttr: 'Позволяет Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     ]);
    
//     let input = new Description (titleOfTag = '<input>',
//     action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     attrs = [
//         {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
//     ]);
    
//     let form = new Description (titleOfTag = '<form>',
//     action = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//     attrs = [
//         {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//         {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//     ]);
    
//     let option = new Description (titleOfTag = '<option>',
//     action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     attrs = [
//         {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//     ]);
    
//     let select = new Description (titleOfTag = '<select>',
//     action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
//     attrs = [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     ]);
    

//     console.log(a , div, h1, span, input, form, option, select);

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class Description {
//     constructor(titleOfTag, action, attrs) {

//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }

//     addAttribute(title, description) {
//                 let newAttr = {title: title, description: description};
//                 this.attributes.push(newAttr);
//             }
    
//     aDescription = new Description (titleOfTag = '<a>',
//     action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     attrs = [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'},
//         {titleOfAttr: 'coords' , actionOfAttr:'Устанавливает координаты активной области.'}
//     ]);
    
//     divDescription = new Description (titleOfTag = '<div>',
//     action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
//     attrs = [
//         {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>. ссылки с помощью комбинации клавиш'},
//         {titleOfAttr: 'title' , actionOfAttr:'Добавляет всплывающую подсказку к содержимому. координаты активной области.'},
//     ]);
    
    
//      h1Description = new Description (titleOfTag = '<h1>',
//     action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
//     attrs = [
//         {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
//     ]);
    
//      spanDescription = new Description (titleOfTag = '<span>',
//     action = 'HTML Тег <span> предназначен для определения строчных элементов документа.',
//     attrs = [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//         {titleOfAttr: 'class', actionOfAttr: 'Позволяет Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     ]);
    
//      inputDescription = new Description (titleOfTag = '<input>',
//     action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     attrs = [
//         {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
//     ]);
    
//      formDescription = new Description (titleOfTag = '<form>',
//     action = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//     attrs = [
//         {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//         {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//     ]);
    
//      optionDescription = new Description (titleOfTag = '<option>',
//     action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     attrs = [
//         {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//     ]);
    
//      selectDescription = new Description (titleOfTag = '<select>',
//     action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
//     attrs = [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     ]);
    
// }
//    Description = new Description ( aDescription , divDescription, h1Description, spanDescription, inputDescription, formDescription, optionDescription, selectDescription);
    

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {model: "prado", producer: "toyota", year: '2010', maxSpeed: 250, power: 130, driver: null,
//     drive() {
//         console.log(`The model of the car is ${this.model}\nThe manufacturer is ${this.producer}\nThis car was produced in ${this.year}\nIts max speed is ${this.maxSpeed}`)
//             },
//     info() {
//         console.log()
//     },
//     increaseMaxSpeed(newSpeed) {this.maxSpeed += newSpeed} ,
//     changeYear(newYear) {this.year = newYear},
//     addDriver(driver) {this.driver = driver},
// }
// car.addDriver({name: 'Igor' , age: 50, skill: 10})
// car.info();
// console.log(car);
// car.drive();




// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, 
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// function Car(model, producer, year, maxSpeed,) { 
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.driver = null;
// }
//         this.driver = function() {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);}
        
    

//             function info() {` ${this.model} ${this.producer} ${this.year} ${this.maxSpeed} `} 
//         console.log();
    
//      this.increaseMaxSpeed = function(value) {this.maxSpeed += value} 
//      this.changeYear = function(newYear) {
//         this.year = newYear;
// };
//  this.addDriver = function(name, age ,skill) {
//     if (typeof driver === 'objcet') {
//         this.driver = driver;
//         return
//     }
// }
//     let toyota = new Car ("prado", "toyota",  '2010',  250);
//     console.log(toyota);
//     let AddDriver = new driver({name: 'Igor' , age: 50, skill: 10});
//     console.log(toyota);
   

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor(model, producer, year, maxSpeed ) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;

//         this.maxSpeed = maxSpeed;
//         this.driver = null;
//     }

//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }

//     info() {
//         console.log(`The model of the car is ${this.model}\nThe manufacturer is ${this.producer}\n
//         This car was produced in ${this.year}\nIts max speed is ${this.maxSpeed}`)
//     }

//     set changeYear(newYear) {
//         this.year = newYear;
//     }

//     addDriver(driver) {
//         if (typeof driver === 'object') {
//             this.driver = driver;
//             return
//         }
        
//     }


//     set increaseMaxSpeed(value) {
//         this.maxSpeed += value;
//     }
// }

//     let toyota = new Car ("prado", "toyota",  '2015',  250);
//     toyota.addDriver({name: 'Igor' , age: 50, skill: 10});
//     console.log(toyota);

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================


// class Popelushka {
//     constructor(name, age, footSize) { 
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
        
//     }
// }

// let popelArray = [
//     new Popelushka('Alina',20 , 39 ),
//     new Popelushka('Klara',21 ,40 ),
//     new Popelushka('Inna',19 ,38 ),
//     new Popelushka('Nikita', 22 ,41 ),
//     new Popelushka('Ulia',30 ,42 ),
//     new Popelushka('Tereza', 27 , 39 ),
//     new Popelushka('Katia', 27 , 37 ),
//     new Popelushka('Orusia',26 , 36 ),
//     new Popelushka('Lydmila',27 , 40 ),
//     new Popelushka('Sophia', 39 , 27 ),
// ]

// let prince = {name: 'Oleg', age: 25, foot: 39}
// let find_Popelushka = null;
// for (const popelushka of popelArray){
//     if (popelushka.footSize === prince.foot){
//         find_Popelushka = popelushka;
//         console.log(`and the pair for prince + ${popelushka.name}`)
//     }
// }
        
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// 
// function Popelushka (name , age , footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;    
// }

// let popelushkaArray = [
//     new Popelushka('Alina',20 , 39 ),
//     new Popelushka('Klara',21 ,40 ),
//     new Popelushka('Inna',19 ,38 ),
//     new Popelushka('Nikita', 22 ,41 ),
//     new Popelushka('Ulia',30 ,42 ),
//     new Popelushka('Tereza', 27 , 39 ),
//     new Popelushka('Katia', 27 , 37 ),
//     new Popelushka('Orusia',26 , 36 ),
//     new Popelushka('Lydmila',27 , 40 ),
//     new Popelushka('Sophia', 39 , 27 ),
// ]

// function prince(name , age , foot) {
//     this.name = name;
//     this.age = age;
//     this.foot = foot;

//     this.find_Popelushka = function (array) {
//         for (const popelushka of popelArray){
//                 if (popelushka.footSize === prince.foot){
//                     find_Popelushka = popelushka;
//                     console.log(`and the pair for prince + ${popelushka.name}`);
//         }
//     }
// }
// }
// let prince1 = new prince('Oleg', 25,  39);
// console.log();


// не можу вивезти в консоль результат