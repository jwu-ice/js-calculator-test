/// <reference types="cypress" />;

// - [x] 2개의 숫자에 대해 덧셈이 가능하다.
// - [x] 2개의 숫자에 대해 뺄셈이 가능하다.
// - [x] 2개의 숫자에 대해 곱셈이 가능하다.
// - [x] 2개의 숫자에 대해 나눗셈이 가능하다.
// - [x] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - [x] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [x] 계산 결과를 표현할 때 소수점 이하는 버림한다.

describe("계산기 앱 테스트", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500");
  });

  it("2개의 숫자에 대해 덧셈이 가능하다.", () => {
    cy.get(".digit").contains("2").click();
    cy.get(".operation").contains("+").click();
    cy.get(".digit").contains("9").click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", "11");
  });

  it("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
    cy.get(".digit").contains("2").click();
    cy.get(".operation").contains("-").click();
    cy.get(".digit").contains("9").click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", "-7");
  });

  it("2개의 숫자에 대해 곱셈이 가능하다.", () => {
    cy.get(".digit").contains("2").click();
    cy.get(".operation").contains("x").click();
    cy.get(".digit").contains("9").click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", "18");
  });

  it("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
    cy.get(".digit").contains("2").click();
    cy.get(".operation").contains("/").click();
    cy.get(".digit").contains("9").click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", "0");
  });

  it("AC(All Clear)버튼을 누르면 0으로 초기화 한다.", () => {
    cy.get(".digit").contains("2").click();
    cy.get(".modifier").click();
    cy.get("#total").should("have.text", "0");
  });

  it("숫자는 한번에 최대 3자리 수까지 입력 가능하다.", () => {
    for (let i = 0; i < 4; i++) {
      cy.get(".digit").contains("2").click();
    }

    cy.get("#total").should("have.text", "222");
  });

  it("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
    cy.get(".digit").contains("5").click();
    cy.get(".operation").contains("/").click();
    cy.get(".digit").contains("2").click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", "2");
  });
});
