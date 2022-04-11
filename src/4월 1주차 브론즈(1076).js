// [문제]
// 전자 제품에는 저항이 들어간다. 
// 저항은 색 3개를 이용해서 그 저항이 몇 옴인지 나타낸다. 
// 처음 색 2개는 저항의 값이고, 마지막 색은 곱해야 하는 값이다. 
// 저항의 값은 다음 표를 이용해서 구한다.

// [표]
// 색	     값	   곱
// black	 0	  1
// brown	 1	  10
// red	   2	  100
// orange	 3	  1,000
// yellow	 4	  10,000
// green	 5	  100,000
// blue	   6	  1,000,000
// violet	 7	  10,000,000
// grey	   8	  100,000,000
// white	 9	  1,000,000,000

// 예를 들어, 저항의 색이 yellow, violet, red였다면 저항의 값은 4,700이 된다.
// 4, 7, 100

// [입출력]
// 입력
// 첫째 줄에 첫 번째 색, 둘째 줄에 두 번째 색, 셋째 줄에 세 번째 색이 주어진다. 위의 표에 있는 색만 입력으로 주어진다.

// 출력
// 입력으로 주어진 저항의 저항값을 계산하여 첫째 줄에 출력한다.

// 예제 입력 1 
// yellow
// violet
// red
// 예제 출력 1 
// 4700

// 예제 입력 2 
// orange
// red
// blue
// 예제 출력 2 
// 32000000

// 예제 입력 3 
// white
// white
// white
// 예제 출력 3 
// 99000000000

// Ver.1
import readline from 'readline';

const colors = 
  ['black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


let cnt = 0;
let sum = '';

rl.on("line", line => {
  const isColors = colors.some(e => e === line);

  if (isColors){
    if (cnt <= 1){
      sum = sum + (colors.indexOf(line));
      cnt ++;
    }
    else{
      sum = parseInt(sum) * (10 ** colors.indexOf(line));
      console.log(sum);
      rl.close();
    }
  }
  else{
    console.log(`${line}색은 존재하지 않습니다. 다시 입력해주세요.`);
  }
})

rl.on("close", () => {
  process.exit()
})