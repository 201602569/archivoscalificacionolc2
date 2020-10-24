    let val1 = 0;
    let val2 = 0;
    let val3 = 0;
    let a = 0;
    let b = 0;

    val1 = 7 - (5 + 10 * (20 / 5 - 2 + 4 * (5 + 2 * 3)) - 8 * 3 ** 2) + 50 * (6 * 2); //214
    val2 = 2 ** 4 - 9 * (8 - 6 * (3 ** 2 - 6 * 5 - 7 * (9 + 7 ** 3) + 10) - 5 ) + 8 * (36 / 6 - 5 * ( 2 * 3)); //-133853
    val3 = (8 ** 3 * 36 ** 0.5 - 2 ** 5 + 2 ** 3 + 16 ** 0.5 + 2) / 3; //-1018 
    let val4 = val1+val2+val3+val4; //Error, comentar despues de reportar
    //let val4 = val1 - val2 + val3; //El resultado es 135085
    if(val1 - val2 + val3 == 135085){
        console.log('Aritmeticas 100');
    } //funciona bien 

    let String_3: string="";  // hay que inicializar
    let String_4: string="";  // hay que inicializar
    
    let int2_:number=0;

    let TRUE  = true;
    let FALSE  = false;
    int2_ = 45;
    int2_ --; 
    
// error de tipos
let bo:boolean = ((int2_) > 77 ); 
let bo2:boolean= bo||FALSE;
let bo3:boolean = ((int2_) < 78); 
let bo4:boolean = ((int2_ + 10) <= int2_ )
let bo5:boolean= (bo4|| FALSE)
let bo6=((int2_ + 10)>= int2_)
let bo7=(!!!!!!!!!!!!(bo6))


 String_3 = ""+bo2+ "," + bo3 + "," + bo5 + "," + bo7;

let bo8:boolean=(int2_ >= 77) 
let bo9:boolean= ((0-1) < 100);
let bo10:boolean= bo8 ||bo9;
let bo11:boolean=(int2_ > 78) //&& 100 + 0);
let bo12:boolean=(bo11 && (10+0))

String_4 =""+bo10 + "," + bo11;

console.log("Lógica 1" + " = " + String_3); //false,true,false,true
console.log("Lógica 2" + " = " + String_4); //true,false

//funciona bien hasta aca prueba 2
let r1:boolean=(a == 0);
let r2:boolean=((44.3 < 44.4));

let r3=(""+r1)!=(""+r2);

let r4:boolean=(2**5 == 31 + 2 % 1);

let relacionaes : boolean = (""+r3) == (""+r4);

let r5=(b == a)
let r6=(""+relacionaes)==(""+r5);

let r7=(String_3 == "false,true,false,true");
let r8=(String_4 == "true,false");
let r9=( (""+r6) != (""+(532 > 532)));
let r10=(""+r7 == (""+r8 ));
relacionaes =  (""+r9)==(""+r10) ; 
    if(relacionaes){
        console.log("Relacionels 100");
    }
    else{
        console.log("Relacionales 0");
    }
/***********************/
    const dimension = 3;

    //Error porque una constante debe estar asginada
    //Si no reporta el error -0.5 en declaracion de variables
    const dim2;
/*  no tengo arreglos  

let arreglo : string[] = ["Estudiante1", "Estudiante2", "Estudiante3"];
    //Posicion 0 - 2 para estudiante 1
    //Posicion 3 - 5 para estudiante 2
    //Posicion 6 - 8 para estudiante 3
    let tablero : number[] = [0,0,0,0,0,0,0,0,0];
    let estado : boolean[] = [false, false, false, false, false, false, false, false, false];

    function agregar(i : number, j : number, nota : number) : boolean{
        if(!estado[i * dimension + j]){
            tablero[i * dimension + j] = nota;
            estado[i*dimension + j] = true;
            return true;
        }
        console.log("Posicion ocupada");
        return false;
    }

    function imprimirPromedio(estudiante : number){
        let promedio = (tablero[estudiante * dimension + 0] + tablero[estudiante * dimension + 1] + tablero[estudiante * dimension + 2])/3;
        console.log("Promedio Estudiante ", arreglo[estudiante], " = ", promedio);
    }

    //Error porque es una constante
    //Si no reporta el error -0.5 en asignacion de variables
    dimension = 30;

    //Notas estudiante 1
    agregar(0,0, 90);
    agregar(0,1, 95);
    agregar(0,2, 92);

    //Notas estudiante 2
    agregar(1,0, 85);
    agregar(1,1, 90);
    agregar(1,2, 100);

    //Notas estudiante 3
    agregar(2,0, 20);
    agregar(2,1, 100);
    agregar(2,2, 100);

    //Imprimir Promedios
    imprimirPromedio(0); //92.33 -> + 0.5
    imprimirPromedio(1); //91.66 -> + 0.5
    imprimirPromedio(2); //70 -> + 0.5

    //Debe imprimir posicion ocupada -> + 0.5
    agregar(2,0, -1);

/*
Aritmeticas 100
Lógica 1 = false,true,false,true
Lógica 2 = true,false
Relacionels 100
Promedio Estudiante  Estudiante1  =  92.33333333333333
Promedio Estudiante  Estudiante2  =  91.66666666666667
Promedio Estudiante  Estudiante3  =  73.33333333333333
Posicion ocupada
*/

