describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect( bubbleSort([3,4,12,5,11,59,24]) ).toEqual( [3,4,5,11,24,59] );
  });
});
