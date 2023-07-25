// CSV 파일 경로
const csvFilePath = 'data.csv';

// 랭킹을 표시할 테이블과 바디 요소 가져오기
const rankingTable = document.getElementById("ranking-table");
const rankingBody = document.getElementById("ranking-body");

// CSV 파일 로드 및 빈도수 랭킹 표시
Papa.parse(csvFilePath, {
  download: true,
  header: true,
  complete: function(results) {
    const data = results.data;

    // 빈도수 내림차순으로 정렬
    data.sort((a, b) => b.frequency - a.frequency);

    // 빈도수 랭킹을 테이블에 표시
    displayRanking(data);
  }
});

// 빈도수 랭킹 표시 함수
function displayRanking(data) {
  // 테이블 초기화
  rankingBody.innerHTML = "";s

  // 빈도수 랭킹을 테이블에 추가
  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.word}</td>
      <td>${item.frequency}</td>
    `;
    rankingBody.appendChild(row);
  });
}

// 필터 적용 버튼 클릭 시 처리
const applyFilterButton = document.getElementById("apply-filter");
applyFilterButton.addEventListener("click", function() {
  const minFrequency = parseInt(document.getElementById("filter-min").value, 10);
  const maxFrequency = parseInt(document.getElementById("filter-max").value, 10);

  // 빈도수 랭킹 필터링
  const filteredData = filterRankingData(minFrequency, maxFrequency, dictionaryData);
  displayRanking(filteredData);
});

// 필터 초기화 버튼 클릭 시 처리
const resetFilterButton = document.getElementById("reset-filter");
resetFilterButton.addEventListener("click", function() {
  // 빈도수 랭킹 초기화 (모든 데이터 표시)
  displayRanking(dictionaryData);
});

// 빈도수 랭킹 데이터 필터링 함수
function filterRankingData(minFrequency, maxFrequency, data) {
  return data.filter(item => item.frequency >= minFrequency && item.frequency <= maxFrequency);
}
