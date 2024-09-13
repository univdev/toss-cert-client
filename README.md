# Toss 증권 PC 클라이언트
![Screenshot](/images/README_IMAGE.png)

제가 쓸려고 만들었습니다.  
그냥 Electron으로 감싼거라 기능 추가는 없습니다.  
한가지 있다면 스플래시 스크린정도 추가 했네요.

## 설치 및 실행 방법
``` sh
nvm install # nvm 버전 초기화

pnpm install
pnpm tauri dev # 개발 모드 실행
pnpm build:tauri # 응용 프로그램 빌드 
```

## 개발 이유
- Tauri 설정부터 빌드까지 진행 해보고 싶어서 했습니다.
- 데스크탑 앱이면 작업표시줄에 배치가 가능해서 접근성이 좋습니다.
- 증권앱은 설치해서 사용하는게 왠지 멋있습니다.
