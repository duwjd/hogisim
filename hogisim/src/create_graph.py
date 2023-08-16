import pandas as pd
import matplotlib.pyplot as plt

# 가상의 데이터 생성
data = {
    '날짜': pd.date_range(start='2023-01-01', periods=10, freq='D'),
    '단어1': [10, 15, 25, 30, 20, 5, 10, 18, 25, 30],
    '단어2': [5, 8, 12, 15, 10, 3, 6, 10, 12, 18]
}

df = pd.DataFrame(data)

# 그래프 생성
plt.figure(figsize=(10, 6))
plt.plot(df['날짜'], df['단어1'], label='단어1')
plt.plot(df['날짜'], df['단어2'], label='단어2')
plt.title('word usage frequancy')
plt.xlabel('date')
plt.ylabel('frequency')
plt.legend()
plt.xticks(rotation=45)
plt.tight_layout()

# 이미지로 저장 (UTF-8로 설정)
plt.savefig('./img/graph_image.png')

# 그래프 표시
plt.show()
