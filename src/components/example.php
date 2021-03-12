// Hackerrank
// Array Sum
$hasil = 0;
foreach($ar as $key => $value){
    $hasil += $value;
}
return $hasil;

// Compare Triplet
$n_alice = 0;
$n_bob = 0;

for($i = 0;$i < count($a); $i++ ){
    if($a[$i] > $b[$i]){
       $n_alice += 1;
    }
    elseif($a[$i] < $b[$i]){
        $n_bob += 1;
    }
}
$result =  [$n_alice, $n_bob];
return $result;

// A Very Big Sum
$bigSum = 0;
foreach($ar as $value){
    $bigSum += $value;
}

return $bigSum;

// Diagonal Difference
$length = count($arr);
$a1 = 0;
$a2 = 0;
$index = $length - 1;
for($i = 0; $i < $length; $i++){
    $a1 += $arr[$i][$i];
    $a2 += $arr[$i][$index--];
}
return abs($a1 - $a2);

// Plus Minus
$length = count($arr);
$positive = 0;
$negative = 0;
$zero = 0;
foreach($arr as $num){
    if($num > 0){
        $positive += 1;
    }
    elseif($num < 0){
        $negative += 1;
    }
    else{
        $zero += 1;
    }
}
echo $positive = $positive / $length ." \n";
echo $negative = $negative / $length ." \n";
echo $zero = $zero / $length ." \n";

// Staircase
for ($i = 1 ; $i <= $n ; $i++) {
    for ($j = 1; $j <= ($n-$i); $j++) {
        echo " ";
    }
    for ($k = 1; $k <= $i; $k++) {
        echo "#";
    }
    echo "\n";
}

// Min-Max Sum
$max = $arr[0]; $min = $arr[0];
foreach($arr as $bil){
    if($bil < $min)
        $min = $bil;
    if($bil > $max)
        $max = $bil;
}
echo array_sum($arr)-$max." ";
echo array_sum($arr)-$min;

// Birthday Cake
$total = 0;
$tallCandle = max($candles);
foreach($candles as $bil){
    if($bil == $tallCandle)
        $total += 1;
}
return $total;

// Time Conversion
$time = date('H:i:s', strtotime($s));
return $time;

//  Non divsubset python
counts = [0] * k
for num in s:
    counts[num % k] += 1

count = min(counts[0], 1)

for i in range(1, k//2+1):
    if i != k - i:
        count += max(counts[i], counts[k - i])

if k % 2 == 0:
    count += 1

return count

// Repeated string
$repeats = 0;
$length = strlen($s);
$stringArray = str_split($s);
$numberOfRepeats = floor($n / $length);
$numberOfRepeats = $numberOfRepeats * substr_count($s, 'a');
for($i = 0; $i < $n % $length; $i++) {
    if($stringArray[$i] == 'a') {
        $repeats++;
    }
}
$repeats = $numberOfRepeats + $repeats;
return $repeats;

// Jumping on clouds
$min = 0;
if (gettype($c) !== 'array' || !count($c)) {
    return $min;
}
$len = count($c);
define("CUMULUS", 0);
for ($i = 2; $i <= $len; $i += 2) {
    if (!array_key_exists($i, $c) || $c[$i] !== CUMULUS) {
        $i--;
    }
    $min++;
}
return $min;



