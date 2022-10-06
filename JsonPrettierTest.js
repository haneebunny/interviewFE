class JsonPrettifyTest {
    static runJsonPrettifyTest() {
      /************************************************
       *
       * 아래 코드가 동작하도록 prettify method를 구현하시오.
       * ex) 예시 결과
       *  {
       *      'String<br>Key': 'string"Value',
       *      'Int': 10,
       *      'Array': [
       *          'string
       *              Value',
       *          20
       *      ],
       *      'Float': 10.50,
       *      'EmptyJson': { empty json },
       *      'EmptyArray': [ empty array ],
       *      'NullObject': null
       *  }
       *
       * 결과 조건
       * 1. json object key와 String 값은 ''로 표시한다.
       * 2. 결과의 indent는 space가 아니라 탭으로 간격을 출력한다.
       * 3. int, long의 값은 소수점 없이 표시하고 float, double의 값은 소수점 2째자리까지 표시한다.
       * 4. null object은 null로 표시한다.
       * 5. 내용이 빈 json object는 { empty json }, 내용이 빈 json array는 { empty array }로 표시한다.
       * 6. key 안의 줄 바꿈은 <br>로 출력
       * 7. String value 안의 줄 바꿈은 줄 바꾼 후 indent+1 띄우기
       *
       * 테스트 코드 실행 방법
       * - cli로 node로 실행하여 console 확인
       *
       * Ref URL
       * MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript
       */
  
  
      const jsonElement = {"String\nKey": "string\"Value", "Int": 10, "Array": ["string\nValue", 20], "Float": 10.5, "EmptyJson": {}, "EmptyArray": [], "NullObject": null};
       
      var prettyString = JsonPrettifier.prettify(jsonElement);
      console.log(prettyString);
    }
  }
  
  class JsonPrettifier {
    static prettify(jsonElement) {
      // Test code HERE!!
  
  
  
      
    }
  }
  
  console.log("====================================");
  console.log("Test code start");
  
  try {
    JsonPrettifyTest.runJsonPrettifyTest();
  } catch (error) {
    console.log(error);
  }
  
  console.log("Test code end");
  console.log("====================================");
  