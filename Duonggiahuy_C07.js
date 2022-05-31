function soChinhPhuong(soChoTruoc) {
    console.log("Bài 1: Số chính phương");
    let a = soChoTruoc
    let i = 0;
    while (i * i <= a) {
        if (i * i == a) {
            console.log(a + ` la số chính phương`);
            return;
        }
        i++;
    }
    console.log(a + ` không phải là số chính phương`)
}

soChinhPhuong(576);

let array = [1, 4, -20, 9, 200, 8, 16, 500, 71, -10, 80, 7, 20, 100];
// let array = [3, 1, 4]


function kTraSoChinhPhuong(a) {
    let i = 0;
    while (i * i <= a) {
        if (i * i === a) {
            return true;
        }
        i++;
    }
    return false;
}
function lietKeSoChinhPhuong(array) {
    console.log("Bài 3: Liệt kê số chính phương");
    for (let i = 0; i <= array.length - 1; i++) {
        if (kTraSoChinhPhuong(array[i]) === true) {
            console.log(array[i]);
        }
    }
}

lietKeSoChinhPhuong(array);

function lietKeSoChinhPhuongLe(array) {
    console.log("Bài 4: Liệt kê số chính phương lẻ");
    for (let i = 0; i <= array.length - 1; i++) {
        if (kTraSoChinhPhuong(array[i]) === true && array[i] % 2 == 1) {
            console.log(array[i]);
        }
    }
}

lietKeSoChinhPhuongLe(array);

function tongSoChinhPhuong(array) {
    console.log("Bài 5: Tổng số chính phương");
    let s = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        if (kTraSoChinhPhuong(array[i]) == true) {
            s = s + array[i];
        }
    }
    return s;
}

console.log(tongSoChinhPhuong(array));

function demSoChinhPhuong(array) {
    console.log("Bài 6: Đếm số chính phương");
    let count = 0;
    for (let i = 0; i <= array.length -1; i++) {
        if(kTraSoChinhPhuong(array[i]) == true) {
            count++;
        }
    }
    return count;
}

console.log(demSoChinhPhuong(array));


function demSoChinhPhuongChan(array) {
    let count = 0;
    for (let i = 0; i <= array.length -1; i++) {
        if(kTraSoChinhPhuong(array[i]) == true && array[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}

function tongSoChinhPhuongChan(array) {
    let s = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        if (kTraSoChinhPhuong(array[i]) == true && array[i] % 2 == 0) {
            s = s + array[i]
        }
    }
    return s;
}

function trungBinhCong(array) {
    console.log("Bài 7: Trung Binh Cộng")
    let tbc = tongSoChinhPhuongChan(array) / demSoChinhPhuongChan(array)
    console.log(tbc);
}

trungBinhCong(array);

function timMax(array) {
    console.log("Bài 8: Tìm max");
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    return max
}

console.log(timMax(array));


function timAmMax(array) {
    console.log("Bài 9: Tìm max âm");
    let max = array[0];
    for (let i = max; i < array.length; i++) {
        if (max < array[i] && array[i] < 0) {
            max = array[i]
        }
    }
    return max
}

console.log(timAmMax([-20, -9, 200, -50, 16, 500, 71, -10,]));


function timSoChinhPhuongMin(array) {
    console.log("Bài 10: Tìm số chính phương nhỏ nhất");
    let chinhPhuongMin = array[0];
    for (let i = 1; i <= array.length; i++) {
        if (kTraSoChinhPhuong(array[i]) == true && array[i] < chinhPhuongMin) {
            chinhPhuongMin = array[i];
        }
    }
    return chinhPhuongMin;
}

console.log(timSoChinhPhuongMin(array));

function timSoDuong(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] < 0) {
            return true;
        }
    }
    return false;
}

function tonTaiDuong(array) {
    console.log("Bài 11: Tồn tại dương");
    if ( timSoDuong(array) == true) {
        console.log("co ton tai so duong");
    }
    else {
        console.log("khong ton tai so duong")
    }
}

tonTaiDuong(array);

function kiemTraToanAm(array) {
    for (let i = 0; i <= array.length -1; i++) {
        if (array[i] > 0) {
            return false;
        }
    }
    return true;
}

function toanAm(array) {
    console.log("Bài 12: Toàn Âm");
    if (kiemTraToanAm(array) === true) {
        console.log("mang co toan so am")
    }
    else {
        console.log("mang khong có toan so am")
    }
}

toanAm(array);

function kiemTraTonTaiSoChinhPhuong(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (kTraSoChinhPhuong(array[i]) === true) {
            return true
        }
    }
    return false
}

function tonTaiSoChinhPhuong(array) {
    console.log("Bài 13: Tồn tại số chính phương")
    if (kiemTraTonTaiSoChinhPhuong(array) === true) {
        console.log("mang co ton tai so chinh phuong");
    }
    else {
        console.log("mang khong co ton tai so chinh phuong");
    }
}

tonTaiSoChinhPhuong(array);


function kTraDaySo(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

function kiemTraSoTangDan(array) {
    console.log("Bài 15: Kiểm tra tăng dần")
    if (kTraDaySo(array) == true) {
        console.log("day so tang dan");
    }
    else {
        console.log("day so khong tang dan")
    }
}

kiemTraSoTangDan(array);